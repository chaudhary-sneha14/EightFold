import fs from "fs/promises";

import { createEmptyCandidate } from "../utils/sampleCandidate.js";
import { normalizeEmail } from "../normalizers/emailNormalizer.js";
import { normalizeSkill } from "../normalizers/skillNormalizer.js";

export const parseGithubJSON = async (filePath) => {
  const file = await fs.readFile(filePath, "utf-8");

  const data = JSON.parse(file);

  const candidate = createEmptyCandidate();

  candidate.full_name = data.name || "";
  candidate.provenance.full_name = "GitHub";

  candidate.emails = data.email
    ? [normalizeEmail(data.email)]
    : [];
  candidate.provenance.emails = "GitHub";

  candidate.headline = data.bio || "";
  candidate.provenance.headline = "GitHub";

  candidate.links.github = data.profile_url || "";
  candidate.provenance.github = "GitHub";

  candidate.skills = (data.skills || []).map(normalizeSkill);
  candidate.provenance.skills = "GitHub";

  return candidate;
};