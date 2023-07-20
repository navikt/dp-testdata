import fs from "fs";
import path from "path";
import { JsonSchemaFile } from "@/lib/types/jsonSchemaFile";

//export const schemas = readJsonFilesFromFolder("./src/schemas/");
export const schemas = () => readJsonFilesFromFolder("./src/schemas/");

function readJsonFilesFromFolder(folderPath: string): JsonSchemaFile[] {
  try {
    const files = fs.readdirSync(folderPath);
    const jsonFiles = files.filter((file) => path.extname(file) === ".json");

    const result: JsonSchemaFile[] = jsonFiles.map((file) => {
      const filePath = path.join(folderPath, file);
      const content = fs.readFileSync(filePath, "utf8");
      const jsonData = JSON.parse(content);
      return {
        filename: file,
        content: jsonData,
      };
    });

    return result;
  } catch (error) {
    // @ts-ignore
    console.error("Error reading JSON files from folder:", error.message);
    return [];
  }
}
