const express = require("express");
const router = express.Router();

// const { upload } = require("../middleware/uploadImage");
const fileUpload = require("express-fileupload");

const {
  showJourney,
  showJourneyDetail,
  journeyUser,
  createJourney,
  updateJourney,
  deleteJourney,
} = require("../controller/journey");

const {
  showBookmark,
  userBookmark,
  deleteBookmark,
  createBookmark,
  // createTransaction,
  // updateTransaction,
} = require("../controller/bookmark");

const {
  showUser,
  showUserDetail,
  updateUser,
  deleteUser,
} = require("../controller/user");
const { register, login } = require("../controller/auth");
const { authenticated } = require("../middleware/authControl");

// router.get("/country", showCountry);
// router.get("/country/:id", showCountryDetail);
// router.post("/country", createCountry);
// router.patch("/country/:id", updateCountry);

router.get("/journey", showJourney);
router.get("/journey/:id", showJourneyDetail);
router.get("/journey/user/:jnUserId", journeyUser);
router.post("/journey", createJourney);
router.patch("/journey/:id", updateJourney);
router.delete("/journey/:id", deleteJourney);

router.get("/bookmark", showBookmark);
router.get("/bookmark/user/:bmUserId", userBookmark);
router.delete("/bookmark/:id", deleteBookmark);
router.post("/bookmark", createBookmark);
// router.patch("/transaction/:id", updateTransaction);

router.get("/user", showUser);
router.get("/user/:id", showUserDetail);
router.patch("/user/:id", fileUpload(), updateUser);
router.delete("/user/:id", deleteUser);

router.post("/register", register);
router.post("/login", login);

module.exports = router;
