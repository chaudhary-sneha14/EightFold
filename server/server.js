import express from 'express'
import cors from 'cors'
import transformRoutes from "./src/routes/transformRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Candidate Transformer API Running 🚀");
});

app.use("/api/transform", transformRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});