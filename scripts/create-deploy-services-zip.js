const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");

const filesRoot = path.resolve(__dirname, "..", "static", "files");

function hasRequiredDeployFiles(sourceDir) {
  return ["docker-compose.yml", "drill.env", "db-init"].every((name) =>
    fs.existsSync(path.join(sourceDir, name))
  );
}

function createConfigZip(sourceDir, zipName, renameEnv = false) {
  const outputZip = path.join(sourceDir, zipName);
  const zip = new AdmZip();
  zip.addLocalFolder(sourceDir, "", (name) => !name.endsWith(".zip"));

  if (renameEnv) {
    const envEntry = zip.getEntry("drill.env");
    zip.addFile(".env", envEntry.getData());
    zip.deleteFile(envEntry);
  }

  zip.getEntries().forEach((entry) => {
    if (entry.entryName.endsWith(".sh")) {
      zip.addFile(
        entry.entryName,
        Buffer.from(entry.getData().toString("utf8").replace(/\r\n/g, "\n")),
        "",
        0o755
      );
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
  createConfigZip(
    path.join(filesRoot, version, "deploy-drill4j-services"),
    "deploy-drill4j-services.zip",
    true
  );
});

versions.forEach((version) => {
  [
    ["secure-config", "deploy-drill4j-services-secure.zip"],
    ["helm", "helm.zip"],
  ].forEach(([folder, zipName]) => {
    const sourceDir = path.join(filesRoot, version, folder);
    if (fs.existsSync(sourceDir)) {
      createConfigZip(sourceDir, zipName);
    }
  });
});
