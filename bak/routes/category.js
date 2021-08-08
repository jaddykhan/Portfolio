const express = require("express");
const router = express.Router();

// middlewares
const checkAuth = require("../middlewares/check-auth");
// controller
const {
  create,
  read,
  update,
  remove,
  list,
  getSubs,
} = require("../controllers/category");

// routes
router.post("/category", checkAuth,  create);
router.get("/categories", list);
router.get("/category/:slug", read);
router.put("/category/:slug", checkAuth,  update);
router.delete("/category/:slug", checkAuth,  remove);


module.exports = router;
