<template>
  <div>
    <b-button variant="success" @click="checkout" :disabled="cart.length === 0"
      >Checkout</b-button
    >
    {{ checkoutStatus }}
    <p>Total: {{ calculateTotal }} $</p>
    <b-table striped hover :fields="fields" :items="cart">
      <template #cell(product)="data">
        <img
          :src="data.item.image"
          :alt="data.item.image"
          height="30"
          width="30"
        />
        {{ data.item.name }}
      </template>
      <template #cell(price)="data"> {{ data.item.price }} $ </template>
      <template #cell(id)="data">
        {{ data.item.id }}
      </template>
    </b-table>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      fields: [
        { key: "id", label: "Id" },
        { key: "product", label: "Product Detail" },
        { key: "price", label: "Price" },
        { key: "size", label: "Size" },
        { key: "quantity", label: "Quantity" },
        { key: "color", label: "Color" },
      ],
    };
  },
  computed: {
    ...mapState("cart", ["cart", "checkoutStatus"]),
    ...mapGetters("cart", ["calculateTotal"]),
  },
  methods: {
    ...mapActions("cart", ["checkout"]),
  },
  created() {},
};
</script>