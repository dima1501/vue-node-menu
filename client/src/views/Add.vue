<template>
  <div class="add">
    <form class="add__form" @submit.prevent="createItem">
      <div class="add__form-line">
        <label for="name" class="add__form-label">Name</label>
        <input v-model="newItem.name" type="text" name="name" required>
      </div>
      <div class="add__form-line">
        <label for="image" class="add__form-label">Image(link)</label>
        <input v-model="newItem.image" type="text" name="image" required>
      </div>
      <div class="add__form-line">
        <label for="price" class="add__form-label">Price</label>
        <input v-model="newItem.price" type="number" name="price" required>
      </div>
      <div class="add__form-line">
        <label for="category" class="add__form-label">Category</label>
        <input v-model="newItem.category" type="text" name="category" required>
      </div>
      <button type="submit" class="add__form-btn">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      newItem: {
        name: null,
        price: null,
        category: null,
        image: null
      }
    }
  },
  methods: {
    createItem() {
      this.$store.dispatch("createNewItem", this.newItem);
    }
  }
};
</script>

<style lang="scss">
.add {

  &__form {

    &-line {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }

    &-label {
      text-align: left;
      display: block;
      flex-shrink: 0;
      width: 80px;
      padding-right: 20px;
    }
  }
}
</style>
