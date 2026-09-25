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

const versions = fs.readdirSync(filesRoot).filter((name) => {
  const deployDir = path.join(filesRoot, name, "deploy-drill4j-services");
  return fs.existsSync(deployDir) && hasRequiredDeployFiles(deployDir);
});

if (versions.length === 0) {
  throw new Error(
    "No deploy-drill4j-services folders with required files found under static/files"
  );
}

versions.forEach((version) => {
  createDeployServicesZip(path.join(filesRoot, version, "deploy-drill4j-services"));
});
