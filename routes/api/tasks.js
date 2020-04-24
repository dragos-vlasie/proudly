// import auth from "../../middleware/auth";
const express = require("express");
const router = express.Router();

// Tasks Model
const Tasks = require("../../models/Tasks");

// @route   GET api/tasks
// @desc    Get All Tasks
// @access  Public

router.get("/", async (req, res) => {
  try {
    const task = await Task.find();
    if (!task) throw Error("No Task");

    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private

router.post("/", async (req, res) => {
  const newTask = new Item({
    name: req.body.name
  });

  try {
    const task = await newTask.save();
    if (!task) throw Error("Something went wrong saving the task");

    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// /**
//  * @route   DELETE api/items/:id
//  * @desc    Delete A Item
//  * @access  Private
//  */

// router.delete("/:id", auth, async (req, res) => {
//   try {
//     const item = await Item.findById(req.params.id);
//     if (!item) throw Error("No item found");

//     const removed = await item.remove();
//     if (!removed)
//       throw Error("Something went wrong while trying to delete the item");

//     res.status(200).json({ success: true });
//   } catch (e) {
//     res.status(400).json({ msg: e.message, success: false });
//   }
// });

module.exports = router;
