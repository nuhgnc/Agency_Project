const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Photo = require("../model/PhotoModel");

router.get("/", async (req, res) => {
  const Photos = await Photo.find({});
  const totalPhoto = Photos.length;

  res.render("index", { Photos, totalPhoto });
});

router.post("/addPhoto", (req, res) => {
  const photo = new Photo({
    photoName: req.body.name,
    photoURL:
      req.body.photoURL == ""
        ? "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        : req.body.photoURL,
    details: req.body.deails,
    photoCategory: req.body.Category,
    shortDetail: req.body.shortDetail,
    constituent: req.body.constituent,
  });
  photo.save(function (err) {
    if (err) return handleError(err);
    console.log("data saved on mongo");
  });
  res.redirect("/");
});

router.post("/delete/:id", (req, res) => {
  Photo.findByIdAndDelete(req.params.id)
    .then(console.log(req.params.id, "id silindi"))
    .catch((err) => console.log(req.body.id, " silinirken hata oluştu"));
  res.redirect("/#portfolio");
});

router.get("/update/:id", async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render("editPage", { photo });
});

router.post("/update/:id", async (req, res) => {
  const updatePhoto = Photo.findByIdAndUpdate(req.params.id, {
    constituent: req.body.constituent,
    photoName: req.body.name,
    photoURL: req.body.photoURL,
    photoCategory: req.body.Category,
    shortDetail: req.body.shortDetail,
    details: req.body.deails,
  })
    .then(console.log("güncellendi"))
    .catch((err) => console.log(err));

  res.redirect("/#portfolio");
});

module.exports = router;
