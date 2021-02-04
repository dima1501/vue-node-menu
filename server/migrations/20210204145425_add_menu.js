exports.up = function (knex) {
    return knex.schema.createTable("menu", function (table) {
      table.string("id", 255).notNullable();
      table.string("name").notNullable();
      table.string("image").notNullable();
      table.integer("price").notNullable();
      table.string("category").notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("menu");
  };
  