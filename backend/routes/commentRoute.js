const express = require("express");
const {
  createComment,
  getAllComment,
  getYourComments,
} = require("../controllers/commentController");

const router = express.Router();

router.post("/", createComment);
router.get("/", getAllComment);
router.get("/:userId", getYourComments);

module.exports = router;
