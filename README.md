# 🚀 Multi-Source Candidate Transformer

A full-stack application that transforms candidate information from multiple sources into a single canonical candidate profile.

This project was developed as part of the **Eightfold Engineering Internship Assignment (Jul–Dec 2026)**.

---

## ✨ Features

- 📄 Parse Recruiter CSV
- 🐙 Parse GitHub JSON
- 🔄 Normalize candidate data
  - Email
  - Phone Number (E.164)
  - Skills
- 🔀 Merge multiple candidate sources
- 📍 Track provenance for every field
- ⭐ Calculate confidence score
- ⚙️ Runtime configurable output schema
- 🌐 REST API using Express.js
- 💻 Modern React frontend
- 📤 File upload support

---

# 📸 Screenshots

## Home Page

<img width="947" height="433" alt="image" src="https://github.com/user-attachments/assets/16444fb3-5655-4930-99a5-a3b2e731c5ac" />


---

## Upload Candidate Sources

<img width="935" height="206" alt="image" src="https://github.com/user-attachments/assets/34c927f4-e753-4f95-ad6f-0f8d1e4b92fd" />


---

## Transformation Summary

<img width="933" height="398" alt="image" src="https://github.com/user-attachments/assets/ffdebe9a-33b8-4f7e-bb5a-fb0b3ff551da" />


---

## Candidate Profile & Provenance

<img width="933" height="415" alt="image" src="https://github.com/user-attachments/assets/bc4984f5-e104-41fb-90d9-3debb0c858be" />


---

# 🛠 Tech Stack

## Frontend

- React
- Axios
- CSS

## Backend

- Node.js
- Express.js
- Multer
- csv-parser

---

# 📁 Project Structure

```text
candidate-transformer/

├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── outputConfig.json
│   │
│   ├── uploads/
│   │
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── merger/
│   │   ├── normalizers/
│   │   ├── parsers/
│   │   ├── projection/
│   │   ├── routes/
│   │   └── utils/
│   │
│   └── server.js
│
├── sample-files/
│   ├── recruiter.csv
│   └── github.json
│
├── screenshots/
│
└── README.md
```

---

# 🏗 Architecture

```
Recruiter CSV
        │
GitHub JSON
        │
        ▼
      Parsing
        │
        ▼
   Data Normalization
        │
        ▼
 Candidate Merge Engine
        │
        ▼
 Conflict Resolution
        │
        ▼
 Provenance Tracking
        │
        ▼
 Confidence Scoring
        │
        ▼
 Runtime Output Projection
        │
        ▼
     REST API
        │
        ▼
     React Frontend
```

---

# 🔄 Candidate Transformation Pipeline

1. Parse candidate data from multiple sources.
2. Normalize emails, phone numbers, and skills.
3. Merge records into a canonical profile.
4. Resolve conflicts using deterministic rules.
5. Track the source of every field.
6. Calculate an overall confidence score.
7. Generate configurable output using `outputConfig.json`.
8. Return the transformed candidate profile.

---

# 🔀 Merge Strategy

The merge engine follows deterministic rules to ensure consistent output.

- First valid name is retained.
- Duplicate emails are removed.
- Duplicate phone numbers are removed.
- Longest headline is preferred.
- Skills are merged and deduplicated.
- Experience is combined.
- GitHub and LinkedIn overwrite only empty values.
- Unknown values are never invented.
- Every merged field stores its provenance.

---

# ⭐ Confidence Score

Confidence is calculated using populated candidate fields.

Fields considered:

- Name
- Email
- Phone
- Headline
- Skills
- Experience
- GitHub
- LinkedIn

Formula

```
Confidence Score =
Filled Fields / Total Fields
```

Example

```
7 / 8 = 0.88
```

---

# ⚙ Runtime Configurable Output

The final output schema is controlled by

```
config/outputConfig.json
```

Changing the configuration automatically changes the API response without modifying the application code.

Example

```json
{
  "fields": [
    {
      "name": "candidateName",
      "path": "full_name"
    },
    {
      "name": "primaryEmail",
      "path": "emails.0"
    }
  ]
}
```

---

# 🌐 REST API

## Transform Candidate

```
POST /api/transform
```

### Form Data

| Field | Type |
|--------|------|
| recruiter | CSV |
| github | JSON |

---

## Sample Response

```json
{
  "success": true,
  "candidate": {
    "...": "..."
  },
  "projectedOutput": {
    "...": "..."
  }
}
```

---

# 🚀 Getting Started

## Backend

```bash
cd server

npm install

npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🧪 Sample Input Files

Use the provided sample files.

```
sample-files/

recruiter.csv

github.json
```

Upload both files using the frontend.

---

# 📊 Output

The application generates:

- Canonical Candidate Profile
- Projected Output
- Transformation Summary
- Confidence Score
- Provenance Table

---

# 🎯 Assignment Requirements Covered

- ✅ Multi-source candidate parsing
- ✅ Structured input handling
- ✅ Canonical data model
- ✅ Data normalization
- ✅ Merge engine
- ✅ Conflict resolution
- ✅ Provenance tracking
- ✅ Confidence scoring
- ✅ Runtime configurable output
- ✅ REST API
- ✅ React UI
- ✅ File upload support

---

# 🔮 Future Improvements

- Resume PDF/DOCX parser
- LinkedIn profile parser
- Drag-and-drop upload
- AI-assisted conflict resolution
- Batch candidate processing
- Database support
- Authentication
- Docker deployment

---

# 👩‍💻 Author

**Sneha Chaudhary**

Built for the **Eightfold Engineering Internship Assignment (Jul–Dec 2026)**.
