<template>
  <!-- <div class="product-card">
      <img :src="product.image" alt="Denim Jeans" style="width: 100%" />
      <h1>Tailored Jeans</h1>
      <p class="price">$19.99</p>
      <p>Some text about the jeans..</p>
      <p><button>Add to Cart</button></p>
    </div> -->
  <div class="card">
    <img
      class="card-img product-image"
      width="80"
      height="200"
      :src="product.image"
      alt="Vans"
    />
    <div class="card-body">
      <h4 class="card-title">{{ product.title }}</h4>
      <p class="card-text"></p>
    </div>
    <div class="card-footer">
      <div class="options d-flex flex-fill">
        <select v-model="color" class="custom-select mr-1">
          <option value="" selected disabled>Color</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
        </select>
        <select v-model="size" class="custom-select ml-1">
          <option value="" selected disabled>Size</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
        </select>
      </div>
      <div class="buy d-flex justify-content-between align-items-center">
        <div class="price text-success">
          <h5 class="mt-4">${{ product.price }}</h5>
        </div>
        <a @click.prevent="addToCart" class="btn btn-danger mt-3"
          ><i class="fas fa-shopping-cart"></i> Add to Cart</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: {
    product: Object,
  },
  data() {
    return { color: "", size: "" };
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    addToCart() {
      if (this.color && this.size) {
        const item = {
          product: this.product,
          color: this.color,
          size: +this.size,
        };
        this.addProductToCart(item);
      }
    },
    viewDetail() {},
  },
};
</script>