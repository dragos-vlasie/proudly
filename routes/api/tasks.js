const auth = require("../../middleware/middleware");
const express = require("express");
const router = express.Router();

// Tasks Model
const Task = require("../../models/Tasks");

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

// @route   GET api/tasks/id
// @desc    Get All Tasks of user id
// @access  Public

router.get("/:id", async (req, res) => {
  console.log("req", req.params);
  try {
    const task = await Task.find({ "userData.userId": req.params.id });
    if (!task) throw Error("No Task");

    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// @route   POST api/tasks
// @desc    Create An Task
// @access  Private

router.post("/", async (req, res) => {
  const newTask = new Task({
    userData: {
      userId: req.body.userId,
      userName: req.body.userName
    },
    name: req.body.name
  });

  try {
    const task = await newTask.save();
    if (!task) throw Error("Something went wrong saving task");

    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// @route   POST api/tasks/id/points
// @desc    Create An Task
// @access  Private

router.post("/:id/points", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    console.log(task);
    if (!task) throw Error("No task found");

    const pointAdded = await task.update({ $set: { points: 1 } });
    if (!pointAdded)
      throw Error("Something went wrong while trying to add the point");

    res.status(200).json({ success: "success" });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   DELETE api/tasks/:id
 * @desc    Delete A task
 * @access  Private
 */

router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) throw Error("No task found");

    const removed = await task.remove();
    if (!removed)
      throw Error("Something went wrong while trying to delete the task");

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
