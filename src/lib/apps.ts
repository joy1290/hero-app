import fs from "fs";
import path from "path";

export const getAllApps = async () => {
  const filePath = path.join(process.cwd(), "public", "data.json");

  const fileData = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(fileData);
};