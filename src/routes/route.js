const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor )
router.post("/createPublisher",publisherController.createPublisher )
router.post("/createBook", bookController.createBook  )

router.put("/HardCove", bookController.HardCove)


router.get("/getAuthorsData", authorController.getAuthorsData)
router.get("/getBooksData", bookController.getBooksData)
router.get("/getpublisherData", publisherController.getpublishersData)
router.get("/getBooksWithAuthor", bookController.getBooksWithAuthor)

module.exports = router;