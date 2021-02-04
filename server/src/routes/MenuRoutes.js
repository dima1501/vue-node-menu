const express = require("express");
const router = express.Router();

const MenuService = require("../services/MenuService");

router.get("/api/load-menu", async (req, res) => {
  try {
    const menu = await new MenuService().menu();
    if (menu) {
      res.status(200).send(menu);
    } else {
      res.status(404).send("Error");
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/api/create-item", async (req, res) => {
  try {
    const createMenuItem = await new MenuService().createItem(req.body);
    if (createMenuItem) {
      res.status(200).json({ createMenuItem });
    } else {
      res.status(404).send("Error");
    }
  } catch (err) {
    console.error(err);
  }
});

router.delete("/api/delete-item/:id", async (req, res) => {
  try {
    const deleteMenuItem = await new MenuService().deleteItem(req.params.id);
    if (deleteMenuItem) {
      res.status(200).send(req.params.id);
    } else {
      res.status(404).send("Error");
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
