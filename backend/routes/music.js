const router = require("express").Router();
let music = require("../models/music.model");

router.route("/").get((req, res) => {
  music
    .find()
    .then((music) => res.json(music))
    .catch((err) => res.status(400).json("Error :" + err));
});

//add
router.route("/add").post((req, res) => {
  const fullname = req.body.fullname;
  const username = req.body.username;
  const genre = req.body.genre;
  const musictitle = req.body.musictitle;
  const artist = req.body.artist;

  const newmusiclist = new music({ fullname, username, genre, musictitle, artist });

  newmusiclist
    .save()
    .then((music) => res.json("New Record Added!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

//details
router.route('/:id').get((req, res)=>{
    music.findById(req.params.id)
    .then(music => res.json(music))
    .catch((err) => res.status(400).json("Error :" + err));
});

//delete
router.route('/:id').delete((req, res)=>{
    music.findByIdAndDelete(req.params.id)
    .then(music => res.json('Record was Deleted.'))
    .catch((err) => res.status(400).json("Error :" + err));
});

//update
router.route("/update/:id").post((req, res) => {
    music.findById((req.params.id))
    .then(music => {
    music.fullname = req.body.fullname;
    music.username = req.body.username;
    music.genre = req.body.genre;
    music.musictitle = req.body.musictitle;
    music.artist = req.body.artist;
  
  
    music.save()
      .then(() => res.json("Record was Updated!"))
      .catch((err) => res.status(400).json("Error :" + err));
    })
    .catch((err) => res.status(400).json("Error :" + err));
  });

module.exports = router;
