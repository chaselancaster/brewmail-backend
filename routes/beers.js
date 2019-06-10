const express = require("express");
const router = express.Router();

const Beer = require("../models/Beer");
const User = require("../models/User");

// Add beer to User cellar
router.post("/add", async (req, res) => {
  try {
    console.log(req.session.dbId, "req.session.dbId");
    const currentUser = await User.findById(req.body.currentUser._id);
    console.log(currentUser, "currentUser");
    delete req.body.currentUser;
    currentUser.cellarBeer.push(req.body);
    currentUser.save();
    res.json({
      user: currentUser,
      success: true,
      message: "Added to cellar"
    });
  } catch (err) {
    console.log(err);
  }
});

// Add beer to user FT
router.post("/add/fortrade", async (req, res) => {
  try {
    console.log(req.session.dbId, "req.session.dbId");
    const currentUser = await User.findById(req.body.currentUser._id);
    console.log(currentUser, "currentUser");
    delete req.body.currentUser;
    currentUser.cellarBeer.push(req.body);
    currentUser.save();
    res.json({
      user: currentUser,
      success: true,
      message: "Added to for trade"
    });
  } catch (err) {
    console.log(err);
  }
});

// Add beer to user ISO
router.post("/add/iso", async (req, res) => {
  try {
    console.log(req.session.dbId, "req.session.dbId");
    const currentUser = await User.findById(req.body.currentUser._id);
    console.log(currentUser, "currentUser");
    delete req.body.currentUser;
    currentUser.isoBeer.push(req.body);
    currentUser.save();
    res.json({
      user: currentUser,
      success: true,
      message: "Added to for trade"
    });
  } catch (err) {
    console.log(err);
  }
});

// Find users that have the user's ISO beer in their FT // GET
// I need to see which beers the logged in user has in their ISO
// I need search through all the user's cellar's and see if any of their beer matches the
// current user's ISO beers
// I need to return a list of those users and which beers they have that are a match
router.get("/matches/:beer", async (req, res) => {
  try {
    console.log(req.params.beer, "<-- req.params.beer");
    // const currentUser = await User.findById(req.params.id);
    // const currentUserISOBeerNames = [];
    // for (let i = 0; i < currentUser.isoBeer.length; i++) {
    //   currentUserISOBeerNames.push(currentUser.isoBeer[i].beerName);
    // }
    // console.log(currentUserISOBeerNames, "<-- currentUserISOBeerNames array");
    // console.log(currentUser, "<-- currentUser");
    // const allUsers = []
    // for (let i = 0; i < currentUserISOBeerNames.length; i++) {
    //     currentUserISOBeerNames[i]
    // }
    const allUsers = await User.find({
      "cellarBeer.isForTrade": true,
      "cellarBeer.beerName": `${req.params.beer}`
    });
    // allUsers.filter(user => user.cellarBeer.filter(beer => beer));
    res.json({ allUsers });
    // console.log(currentUser, "<-- currentUser");
    console.log(allUsers, "<-- allUsers");
  } catch (err) {
    console.log(err);
  }
});

// Delete beer
router.delete("/delete/:beerid/:currentUserId", async (req, res) => {
  try {
    const user = await User.findById(req.params.currentUserId);
    console.log(user, "user in delete route");
    user.cellarBeer.splice(req.params.beerid, 1);
    user.save();
    console.log(user);
    res.json({ user, success: true, message: "Beer deleted" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
