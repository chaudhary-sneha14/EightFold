import express from "express";
import { upload } from "../middleware/upload.js";
import { transformCandidate } from "../Controller/transformController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Transform API is running 🚀",
  });
});

router.post(
  "/",
  upload.fields([
    {
      name: "recruiter",
      maxCount: 1,
    },
    {
      name: "github",
      maxCount: 1,
    },
  ]),
  transformCandidate
);

export default router;