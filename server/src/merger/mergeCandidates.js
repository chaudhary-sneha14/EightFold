import { calculateConfidence } from "./confidence.js";

export const mergeCandidates = (candidates) => {
  const merged = structuredClone(candidates[0]);

  for (let i = 1; i < candidates.length; i++) {
    const current = candidates[i];

    if (!merged.full_name && current.full_name) {
      merged.full_name = current.full_name;
      merged.provenance.full_name = current.provenance.full_name;
    }

    merged.emails = [...new Set([...merged.emails, ...current.emails])];

    if (!merged.emails.length && current.emails.length) {
  merged.provenance.emails = current.provenance.emails;
}

    merged.phones = [...new Set([...merged.phones, ...current.phones])];

if (!merged.phones.length && current.phones.length) {
  merged.provenance.phones = current.provenance.phones;
}

    if (current.headline.length > merged.headline.length) {
      merged.headline = current.headline;
      merged.provenance.headline = current.provenance.headline;
    }

    merged.skills = [...new Set([...merged.skills, ...current.skills])];

    if (current.skills.length) {
      merged.provenance.skills = current.provenance.skills;
    }

    if (current.links.github) {
      merged.links.github = current.links.github;
      merged.provenance.github = current.provenance.github;
    }

    if (current.links.linkedin) {
      merged.links.linkedin = current.links.linkedin;
      merged.provenance.linkedin = current.provenance.linkedin;
    }

    merged.experience.push(...current.experience);

    if (current.experience.length) {
      merged.provenance.experience = current.provenance.experience;
    }

    merged.education.push(...current.education);

    if (current.education.length) {
      merged.provenance.education = current.provenance.education;
    }
    merged.overall_confidence = calculateConfidence(merged);
  }

  return merged;
};