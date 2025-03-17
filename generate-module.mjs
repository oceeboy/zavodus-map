#!/usr/bin/env node
import { mkdirSync, writeFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";

const BASE_MODULES_PATH = join(process.cwd(), "modules");

const createModule = (moduleName) => {
  const modulePath = join(BASE_MODULES_PATH, moduleName);
  const subfolders = ["components", "hooks", "services", "constants", "types"];

  if (!existsSync(BASE_MODULES_PATH)) {
    mkdirSync(BASE_MODULES_PATH);
  }

  if (existsSync(modulePath)) {
    console.log(
      `⚠️ Module "${moduleName}" already exists. Checking for missing subfolders...`
    );
    let allPresent = true;
    subfolders.forEach((folder) => {
      const folderPath = join(modulePath, folder);
      if (!existsSync(folderPath)) {
        mkdirSync(folderPath);
        writeFileSync(join(folderPath, ".gitkeep"), "");
        writeFileSync(
          join(folderPath, "README.md"),
          `# ${moduleName} - ${folder}\n\nWrite guidelines here.`
        );
        writeFileSync(join(folderPath, "index.ts"), "");
        console.log(`✅ Created missing folder: ${moduleName}/${folder}`);
        allPresent = false;
      }
    });

    if (allPresent) {
      console.log(`✅ Module "${moduleName}" is already complete.`);
    }

    updateModuleIndex(moduleName);
    return;
  }

  mkdirSync(modulePath);
  console.log(`📁 Created module: ${moduleName}`);

  subfolders.forEach((folder) => {
    const folderPath = join(modulePath, folder);
    mkdirSync(folderPath);
    writeFileSync(join(folderPath, ".gitkeep"), "");
    writeFileSync(
      join(folderPath, "README.md"),
      `# ${moduleName} - ${folder}\n\nWrite guidelines here.`
    );
    writeFileSync(join(folderPath, "index.ts"), "");
    console.log(`📂 Created folder: ${moduleName}/${folder}`);
  });

  updateModuleIndex(moduleName);
};

const updateModuleIndex = (moduleName) => {
  const modulePath = join(BASE_MODULES_PATH, moduleName);
  const subfolders = [
    "components",
    "hooks",
    "services",
    "constants",
    "contexts",
    "providers",
    "types",
  ];
  const indexPath = join(modulePath, "index.ts");

  const exportStatements = subfolders
    .filter((folder) => existsSync(join(modulePath, folder)))
    .map((folder) => `export * from "./${folder}";`)
    .join("\n");

  writeFileSync(indexPath, `${exportStatements}\n`);
  console.log(`✅ Updated ${moduleName}/index.ts`);

  updateModulesIndex();
};

const updateModulesIndex = () => {
  const modulesIndexPath = join(BASE_MODULES_PATH, "index.ts");
  const existingModules = readdirSync(BASE_MODULES_PATH)
    .filter((dir) => dir !== "index.ts")
    .sort();

  const exportStatements = existingModules
    .map((name) => `export * as ${capitalize(name)}Module from "./${name}";`)
    .join("\n");

  writeFileSync(modulesIndexPath, `${exportStatements}\n`);
  console.log(`🔄 Updated modules/index.ts`);
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// CLI Handling for Node.js
const args = process.argv.slice(2);
if (args.length !== 2 || args[0] !== "modules") {
  console.log("❌ Usage: node generate-module.mjs modules <module-name>");
  process.exit(1);
}

const moduleName = args[1];
createModule(moduleName);
