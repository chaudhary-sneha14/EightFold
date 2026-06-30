import { z } from "zod";

export const CandidateSchema = z.object({
  candidate_id: z.string(),

  full_name: z.string().default(""),

  emails: z.array(z.string()).default([]),

  phones: z.array(z.string()).default([]),

  headline: z.string().default(""),

  location: z.object({
    city: z.string().default(""),
    country: z.string().default("")
  }).default({}),

  links: z.object({
    github: z.string().default(""),
    linkedin: z.string().default("")
  }).default({}),

  skills: z.array(z.string()).default([]),

  experience: z.array(z.any()).default([]),

  education: z.array(z.any()).default([]),

  provenance: z.record(z.any()).default({}),

  overall_confidence: z.number().default(0)
});