const router = require("express").Router();
let music = require("../models/music.model");

router.route("/").get((req, res) => {
  music
    .find()
    .then((music) => res.json(music))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/add").post((req, res) => {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const genre = req.body.genre;
  const musictitle = req.body.musictitle;

  const newmusiclist = new music({ fullname, email, genre, musictitle });

  newmusiclist
    .save()
    .then((music) => res.json("New Record Added!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;
