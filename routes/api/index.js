const router = require("express").Router();
// const bookRoutes = require("./books");

// Book routes
// router.use("/books", bookRoutes);

router.get("/articles", (req, res) => {
  console.log("works!");
  res.json({ foo: "bar" });
});

module.exports = router;
