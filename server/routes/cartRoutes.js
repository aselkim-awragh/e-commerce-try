const express = require("express");
const cartController = require("../controllers/cartControllers");

const router = express.Router();

router.get("/", cartController.getCart);
router.post("/add", cartController.addToCart);
router.put("/:productId", cartController.updateToCart);
router.delete("/:productId", cartController.deleteFromCart);
router.delete("/", cartController.deleteCart);

module.exports = router;
