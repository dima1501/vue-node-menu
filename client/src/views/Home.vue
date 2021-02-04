<template>
  <div class="home">
    <div v-if="!$store.state.menu.length" class="home__message">No items:(</div>
    <div class="home__col" v-for="item in $store.state.menu" :key="item.id">
      <MenuItem v-bind="item"/>
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";

export default {
  name: "Home",
  components: {
    MenuItem
  },
  mounted() {
    this.$store.dispatch("loadMenu");
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__col {
    width: 25%;
    max-width: 320px;
    min-width: 200px;
  }
}
</style>
