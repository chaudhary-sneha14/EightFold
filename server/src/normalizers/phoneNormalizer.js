import { parsePhoneNumberFromString } from "libphonenumber-js";

export const normalizePhone = (phone) => {
  if (!phone) return "";

  const phoneNumber = parsePhoneNumberFromString(phone, "IN");

  return phoneNumber?.isValid() ? phoneNumber.number : phone.trim();
};