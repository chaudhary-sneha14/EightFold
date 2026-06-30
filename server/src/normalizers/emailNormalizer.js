export const normalizeEmail = (email) => {
  if (!email) return "";

  return email.trim().toLowerCase();
};