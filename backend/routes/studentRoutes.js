const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// 📦 Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// ================= CREATE =================
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const student = new Student({
      name: req.body.name,
      course: req.body.course,
      image: `/uploads/${req.file.filename}`
    });

    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= READ =================
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// ================= UPDATE (🔥 FIX ADDED) =================
router.put("/:id", async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        course: req.body.course
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= DELETE =================
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const imagePath = path.join(process.cwd(), student.image);

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await Student.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;