const { nanoid } = require("nanoid");
const MenuItemModel = require("../models/MenuItem");

const knex = require("../db/db");

class MenuItemService {
  async menu() {
    try {
      const menu = await knex.select().table("menu");
      if (menu) {
        return menu;
      }
    } catch (err) {
      console.error(err);
    }
  }
  async createItem(data) {
    try {
      const menuItem = await new MenuItemModel(nanoid(), data.name, data.price, data.category, data.image);
      const menuItemInsert = await knex.select().table("menu").insert(menuItem);
      if (menuItemInsert) {
        return menuItem;
      }
    } catch (err) {
      console.error(err);
    }
  }
  async deleteItem(id) {
    try {
      const menuItemDelete = await knex.select().table("menu").where({id}).del();
      if (menuItemDelete) {
        return id;
      }
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = MenuItemService;
