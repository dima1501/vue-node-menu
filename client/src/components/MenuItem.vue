<template>
  <div class="card">
    <div class="card__image" :style="{ 'background-image': 'url(' + image + ')' }"></div>
    <div class="card__content">
      <div class="card__line">{{ name }}</div>
      <div class="card__line">{{ price }}</div>
      <div class="card__line">{{ category }}</div>
      <div class="card__remove" v-on:click="removeItem">Remove item</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-item",
  props: {
    id: String,
    name: String,
    price: Number,
    category: String,
    image: String
  },
  methods: {
    removeItem() {
      const accept = confirm(`Remove ${this.name} from menu?`);
      if (accept) {
        this.$store.dispatch("deleteItem", this.id)
      }
    }
  }
};
</script>

<style lang="scss">
.card {
  margin: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;

  &__image {
    background-size: cover;
    background-position: center;
    height: 150px;
  }

  &__content {
    padding: 15px 20px;
  }

  &__remove {
    cursor: pointer;
    color: red;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
