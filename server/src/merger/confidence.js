export const calculateConfidence = (candidate) => {
  let score = 0;
  let total = 8;

  if (candidate.full_name) score++;
  if (candidate.emails.length) score++;
  if (candidate.phones.length) score++;
  if (candidate.headline) score++;
  if (candidate.skills.length) score++;
  if (candidate.experience.length) score++;
  if (candidate.links.github) score++;
  if (candidate.links.linkedin) score++;

  return Number((score / total).toFixed(2));
};