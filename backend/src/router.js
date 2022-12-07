const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;

const comments = [
  { date: "Date 1", content: "Lorem ipsum 1" },
  { date: "Date 2", content: "Lorem ipsum 2" },
];

router.get("/comments", (req, res) => {
  res.json(comments);
});

module.exports = router;
