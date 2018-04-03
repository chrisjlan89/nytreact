const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/Headlines"
router.route("/api/Articles")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/Articles/:id"
router.route("/api/Articles/:id")
.delete(articlesController.remove);

module.exports = router;
