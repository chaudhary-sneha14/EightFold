import fs from "fs/promises";

const getValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

export const projectOutput = async (candidate) => {
  const config = JSON.parse(
    await fs.readFile("./config/outputConfig.json", "utf8")
  );

  const output = {};

  config.fields.forEach((field) => {
    output[field.name] = getValue(candidate, field.path);
  });

  return output;
};