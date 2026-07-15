const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");

const sourceDir = path.resolve(__dirname, "..", "static", "files", "0.10.0", "deploy-drill4j-services");
const outputZip = path.join(sourceDir, "deploy-drill4j-services.zip");

const dockerComposePath = path.join(sourceDir, "docker-compose.yml");
const envSourcePath = path.join(sourceDir, "drill.env");
const dbInitPath = path.join(sourceDir, "db-init");

[dockerComposePath, envSourcePath, dbInitPath].forEach((filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Required file or folder is missing: ${filePath}`);
  }
});

if (fs.existsSync(outputZip)) {
  fs.unlinkSync(outputZip);
}

const zip = new AdmZip();
zip.addLocalFile(dockerComposePath);
zip.addLocalFile(envSourcePath, "", ".env");
zip.addLocalFolder(dbInitPath, "db-init");
zip.writeZip(outputZip);

console.log(`Created ${outputZip}`);

