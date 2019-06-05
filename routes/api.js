const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

// Getting beer info
router.get("/:beer", async (req, res) => {
  const beer = await fetch(
    `https://api.untappd.com/v4/search/beer?q=${req.params.beer}&client_id=${
      process.env.CLIENT_ID
    }&client_secret=${process.env.CLIENT_SECRET}`
  );
  const parsedBeer = await beer.json();
  console.log(parsedBeer, "<-- parsedBeer in beer get route");
  res.json({
    data: parsedBeer,
    success: true
  });
});
