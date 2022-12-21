const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  const categories = await Category.findAll();
  const products = await Product.findAll();
  return res.json([categories, products]);
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  const category = await Category.findAll({
    where: { id: req.params.id },
  });
  const products = await Product.findAll({
    where: { category_id: req.params.id },
  });
  return res.json([category, products]);
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
