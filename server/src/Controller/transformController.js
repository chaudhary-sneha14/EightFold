import { parseRecruiterCSV } from "../parsers/csvParser.js";
import { parseGithubJSON } from "../parsers/githubParser.js";
import { mergeCandidates } from "../merger/mergeCandidates.js";
import { projectOutput } from "../projecton/projectOutput.js";

export const transformCandidate = async (req, res) => {
  try {
    const recruiterFile = req.files?.recruiter?.[0];
    const githubFile = req.files?.github?.[0];

    if (!recruiterFile || !githubFile) {
      return res.status(400).json({
        success: false,
        message: "Recruiter CSV and GitHub JSON files are required.",
      });
    }

    const recruiterCandidates = await parseRecruiterCSV(recruiterFile.path);

    const githubCandidate = await parseGithubJSON(githubFile.path);

    const mergedCandidate = mergeCandidates([
      recruiterCandidates[0],
      githubCandidate,
    ]);

    const projectedOutput = await projectOutput(mergedCandidate);

    res.status(200).json({
      success: true,
      candidate: mergedCandidate,
      projectedOutput,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};