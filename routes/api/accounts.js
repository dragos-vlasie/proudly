const auth = require("../../middleware/middleware");
const express = require("express");
const router = express.Router();

// Account Model
const Account = require("../../models/Account");

// // @route   GET api/account
// // @desc    Get All Accounts
// // @access  Public

// router.get("/", async (req, res) => {
//   try {
//     const account = await Account.find();
//     if (!account) throw Error("No Account");

//     res.status(200).json(account);
//   } catch (e) {
//     res.status(400).json({ msg: e.message });
//   }
// });

// @route   GET api/accounts/id
// @desc    Get All tasks of the of user id
// @access  Public

router.get("/:id", async (req, res) => {
  try {
    const account = await Account.find({ "userData.userId": req.params.id });
    if (!account.length) {
      res.status(200).json(account);
    } else {
      res.status(200).json(account[0].tasks);
    }
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// @route   POST api/accounts
// @desc    Create An account
// @access  Private

router.post("/", async (req, res) => {
  try {
    const account = await Account.findOne({
      "userData.userId": req.body.userId
    });

    if (account) {
      let task = { name: req.body.name, points: 0 };
      account.tasks.push(task);
      await account.save();
      if (!account.tasks)
        throw Error("Something went wrong while trying to add the task");
      res.status(200).json(account);
    } else {
      const newAccount = new Account({
        userData: {
          userId: req.body.userId,
          userName: req.body.userName
        },
        tasks: [{ name: req.body.name, points: 0 }]
      });
      const account = await newAccount.save();
      if (!account) throw Error("Something went wrong saving account");
      res.status(200).json(account);
    }
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// @route   POST api/accounts/id/points
// @desc    Create An account
// @access  Private

router.post("/:id/:id/points", async (req, res) => {
  console.log("req", req.params);
  try {
    const account = await Account.findOne({
      "userData.userId": req.params.id
    });
    if (!account) throw Error("No account found");
    console.log("account", account);

    //  account.tasks.forEach(element => {
    //    if (element._id === ) {

    //    }
    //  });
    account.save();
    if (!pointAdded)
      throw Error("Something went wrong while trying to add the point");

    res.status(200).json({ success: "success" });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   DELETE api/accounts/:id
 * @desc    Delete A account
 * @access  Private
 */

router.delete("/:id/:userId", async (req, res) => {
  try {
    const account = await Account.findOne({
      "userData.userId": req.params.userId
    });
    if (!account) throw Error("No account found");

    const removed = account.tasks.forEach(task => {
      if (task._id == req.params.id) {
        task.remove();
        console.log("account", account);
        account.save();
        res.status(200).json({ success: true });
      }
    });
    if (!removed)
      throw Error("Something went wrong while trying to delete the account");
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
