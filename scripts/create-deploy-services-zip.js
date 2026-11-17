const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");

const filesRoot = path.resolve(__dirname, "..", "static", "files");

function hasRequiredDeployFiles(sourceDir) {
  return ["docker-compose.yml", "drill.env", "db-init"].every((name) =>
    fs.existsSync(path.join(sourceDir, name))
  );
}

function createDeployServicesZip(sourceDir) {
  const outputZip = path.join(sourceDir, "deploy-drill4j-services.zip");
  const dockerComposePath = path.join(sourceDir, "docker-compose.yml");
  const envSourcePath = path.join(sourceDir, "drill.env");
  const dbInitPath = path.join(sourceDir, "db-init");

  if (fs.existsSync(outputZip)) {
    fs.unlinkSync(outputZip);
  }

  const zip = new AdmZip();
  zip.addLocalFile(dockerComposePath);
  zip.addLocalFile(envSourcePath, "", ".env");
  zip.addLocalFolder(dbInitPath, "db-init");
  zip.writeZip(outputZip);

  console.log(`Created ${outputZip}`);
}

function createSecureConfigZip(sourceDir) {
  const outputZip = path.join(sourceDir, "deploy-drill4j-services-secure.zip");
  const zip = new AdmZip();
  const files = [
    ".env.example",
    "README.md",
    "docker-compose-secure.yml",
    "pg_hba.conf",
    "ssl-entrypoint.sh",
    "db-init/01-create-metrics-db.sh",
    "db-init/02-harden-public-role.sql",
    "db-init/03-drill-user-role.sh",
  ];

  files.forEach((name) => {
    const filePath = path.join(sourceDir, name);
    if (name.endsWith(".sh")) {
      zip.addFile(
        name,
        Buffer.from(fs.readFileSync(filePath, "utf8").replace(/\r\n/g, "\n")),
        "",
        0o755
      );
    } else {
      zip.addLocalFile(filePath, path.posix.dirname(name));
    }
  });
  zip.writeZip(outputZip);

  console.log(`Created ${outputZip}`);
}

const versions = fs.readdirSync(filesRoot);
const deployVersions = versions.filter((name) => {
  const deployDir = path.join(filesRoot, name, "deploy-drill4j-services");
  return fs.existsSync(deployDir) && hasRequiredDeployFiles(deployDir);
});

if (deployVersions.length === 0) {
  throw new Error(
    "No deploy-drill4j-services folders with required files found under static/files"
  );
}

deployVersions.forEach((version) => {
  createDeployServicesZip(path.join(filesRoot, version, "deploy-drill4j-services"));
});

versions.forEach((version) => {
  const secureDir = path.join(filesRoot, version, "secure-config");
  if (fs.existsSync(secureDir)) {
    createSecureConfigZip(secureDir);
  }
});
