const CandidateCard = ({ candidate }) => {
  const { projectedOutput, candidate: profile } = candidate;

  return (
    <div className="candidate-card">
      <h2>👤 Candidate Profile</h2>

      <div className="info-row">
        <span className="info-title">Name</span>
        <span>{projectedOutput.full_name}</span>
      </div>

      <div className="info-row">
        <span className="info-title">Email</span>
        <span>{projectedOutput.email}</span>
      </div>

      <div className="info-row">
        <span className="info-title">Phone</span>
        <span>{projectedOutput.phone}</span>
      </div>

      <div className="info-row">
        <span className="info-title">Headline</span>
        <span>{projectedOutput.headline}</span>
      </div>

      <div className="info-row">
        <span className="info-title">GitHub</span>

        <a
          href={projectedOutput.github}
          target="_blank"
          rel="noreferrer"
        >
          View Profile ↗
        </a>
      </div>

      <div style={{ marginTop: "25px" }}>
        <h3>Skills</h3>

        <div className="skills">
          {projectedOutput.skills.map((skill) => (
            <span className="skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="confidence">
        ⭐ Confidence Score: {(projectedOutput.confidence * 100).toFixed(0)}%
      </div>

      <div className="provenance-card">
        <h3>📂 Data Provenance</h3>

        <table>
          <tbody>
            {Object.entries(profile.provenance).map(([field, source]) => (
              source && (
                <tr key={field}>
                  <td>{field}</td>
                  <td>{source}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateCard;