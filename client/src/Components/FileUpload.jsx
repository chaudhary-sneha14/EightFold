import { useState } from "react";
import { api } from "../services/api";

const FileUpload = ({ setCandidate }) => {
  const [recruiterFile, setRecruiterFile] = useState(null);
  const [githubFile, setGithubFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!recruiterFile || !githubFile) {
      alert("Please upload both files.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("recruiter", recruiterFile);
      formData.append("github", githubFile);

      const { data } = await api.post("/transform", formData);

      setCandidate(data);
    } catch (error) {
      console.error(error);
      alert("Transformation Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <div className="file-grid">

        <div className="upload-card">
          <div className="upload-icon">📂</div>

          <h3>Recruiter CSV</h3>

          <p>
            {recruiterFile
              ? recruiterFile.name
              : "Select recruiter data"}
          </p>

          <label className="choose-btn">
            Choose File
            <input
              type="file"
              accept=".csv"
              hidden
              onChange={(e) =>
                setRecruiterFile(e.target.files[0])
              }
            />
          </label>
        </div>

        <div className="upload-card">
          <div className="upload-icon">🐙</div>

          <h3>GitHub JSON</h3>

          <p>
            {githubFile
              ? githubFile.name
              : "Select GitHub profile"}
          </p>

          <label className="choose-btn">
            Choose File
            <input
              type="file"
              accept=".json"
              hidden
              onChange={(e) =>
                setGithubFile(e.target.files[0])
              }
            />
          </label>
        </div>

      </div>

      <button
        className="transform-btn"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Transforming..." : "🚀 Transform Candidate"}
      </button>
    </div>
  );
};

export default FileUpload;