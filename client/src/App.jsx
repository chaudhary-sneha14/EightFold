import React from 'react'
import CandidateCard from './Components/CandidateCard'
import FileUpload from './Components/FileUpload'
import { useState } from 'react';

const App = () => {
  const [candidate, setCandidate] = useState(null);
  const sources = candidate
    ? new Set(
        Object.values(candidate.candidate.provenance).filter(Boolean)
      ).size
    : 0;

  const mergedFields = candidate
    ? Object.values(candidate.candidate.provenance).filter(Boolean).length
    : 0;
  return (
       <div className="container">
     <h1>Multi-Source Candidate Transformer</h1>

      <p className="subtitle">
  Merge, normalize and transform candidate data from multiple sources into a unified profile.
</p>

      <FileUpload setCandidate={setCandidate} />

      {candidate && (
        <>
          <div className="summary-card">
            <h2>📊 Transformation Summary</h2>

            <div className="summary-grid">
              <div className="summary-item">
                <h3>Sources Processed</h3>
                <p>{sources}</p>
              </div>

              <div className="summary-item">
                <h3>Fields Merged</h3>
                <p>{mergedFields}</p>
              </div>

              <div className="summary-item">
                <h3>Confidence</h3>
                <p>
                  {(candidate.candidate.overall_confidence * 100).toFixed(0)}%
                </p>
              </div>
            </div>
          </div>

          <CandidateCard candidate={candidate} />
        </>
      )}

      <footer className="footer">
        <p>
          Built for the Eightfold Engineering Internship Assignment • Multi-Source
          Candidate Data Transformer
        </p>
      </footer>
    </div>
  )
}

export default App
