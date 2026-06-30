import fs from "fs";
import csv from "csv-parser";

import { createEmptyCandidate } from "../utils/sampleCandidate.js";
import { normalizeEmail } from "../normalizers/emailNormalizer.js";
import { normalizePhone } from "../normalizers/phoneNormalizer.js";

export const parseRecruiterCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const candidates = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        const candidate = createEmptyCandidate();

        candidate.full_name = row.name?.trim() || "";
        candidate.provenance.full_name = "Recruiter CSV";

        candidate.emails = row.email
          ? [normalizeEmail(row.email)]
          : [];
        candidate.provenance.emails = "Recruiter CSV";

        candidate.phones = row.phone
          ? [normalizePhone(row.phone)]
          : [];
        candidate.provenance.phones = "Recruiter CSV";

        candidate.headline = row.title || "";
        candidate.provenance.headline = "Recruiter CSV";

        candidate.experience = [
          {
            company: row.company || "",
            title: row.title || "",
          },
        ];
        candidate.provenance.experience = "Recruiter CSV";

        candidates.push(candidate);
      })
      .on("end", () => resolve(candidates))
      .on("error", reject);
  });
};