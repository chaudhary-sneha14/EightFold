import { parseRecruiterCSV } from "./parsers/csvParser.js";
import { parseGithubJSON } from "./parsers/githubParser.js";
import { mergeCandidates } from "./merger/mergeCandidates.js";
import { projectOutput } from "./projecton/projectOutput.js";

const run = async () => {
  const recruiter = await parseRecruiterCSV("./input/recruiter.csv");

  const github = await parseGithubJSON("./input/github.json");

  const merged = mergeCandidates([
    recruiter[0],
    github,
  ]);

  console.log(JSON.stringify(merged, null, 2));

  const finalOutput = await projectOutput(merged);

console.log(JSON.stringify(finalOutput, null, 2));
};

run();