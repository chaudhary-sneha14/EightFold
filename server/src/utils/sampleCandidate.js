import { v4 as uuid } from "uuid";

export const createEmptyCandidate = () => ({
  candidate_id: uuid(),

  full_name: "",

  emails: [],

  phones: [],

  headline: "",

  location: {
    city: "",
    country: ""
  },

  links: {
    github: "",
    linkedin: ""
  },

  skills: [],

  experience: [],

  education: [],

 provenance: {
  full_name: "",
  emails: "",
  phones: "",
  headline: "",
  skills: "",
  experience: "",
  education: "",
  github: "",
  linkedin: ""
},

  overall_confidence: 0
});