<template>
  <div class="product-list">
    <div class="product-card" v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "Home",
  components: { ProductCard },
  methods: {
    ...mapActions("products", ["fetchProduct"]),
  },
  computed: {
    ...mapState("products", ["products"]),
  },
  created() {
    this.fetchProduct({ limit: 10 });
  },
};
</script>
