const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({
    include: Product,
  });
  return res.json(tags);
});


router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tags = await Tag.findAll({
    include: Product,
    where: {
      id: req.params.id,
    },
  });
  return res.json(tags);
});

router.post("/", async (req, res) => {
  // create a new tag
  await Tag.create({
    tag_name: req.body.tag_name,
  });
  res.end();
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  await Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.end();
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.end();
});

module.exports = router;
