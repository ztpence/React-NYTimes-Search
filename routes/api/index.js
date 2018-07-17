const router = require("express").Router();
const db = require("../../models")

router.get("/articles", (req, res) => {
  console.log("works!");
  db.Article.find({})
    .then(articles => {
        console.log(articles)
        res.json(articles)
    })
    .catch(error => {
        res.json(error)
    })
});

router.post("/articles", (req, res) => {
    // article.save()
    db.Article.create({data: req.body})
      .then(response => {
          console.log(response)
          res.json(response)
      })
      .catch(error => {
          res.json(error)
      })
});

router.delete("/articles/:id", (req, res) => {
    // article.save()
    db.Article.deleteOne({_id: req.params.id})
      .then(response => {
          console.log(response)
          res.json(response)
      })
      .catch(error => {
          res.json(error)
      })
});

module.exports = router;
