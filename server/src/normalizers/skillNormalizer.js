const skillMap = {
  javascript: "JavaScript",
  js: "JavaScript",
  node: "Node.js",
  nodejs: "Node.js",
  "node.js": "Node.js",
  react: "React",
  mongodb: "MongoDB",
  express: "Express",
};

export const normalizeSkill = (skill) => {
  if (!skill) return "";

  const key = skill.trim().toLowerCase();

  return skillMap[key] || skill.trim();
};