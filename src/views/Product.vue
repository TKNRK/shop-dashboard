<template>
    <div id="app">
      <div class="nav-bar"></div>

      <div class="cart">
        <p>Cart({{ cart.length }})</p>
      </div>
      <ProductDisplay
        :premium="premium"
        @add-to-cart="updateCart"
      ></ProductDisplay>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import ProductDisplay from "@/components/Products/ProductDisplay.vue";

export default defineComponent({
  name: 'Product',
  components: {
    ProductDisplay
  },
  // data should be stored using vuex
  data() {
    return {
      premium: true,
      cart: [] as string[]
    }
  },
  computed: {},
  methods: {
    updateCart(id: string) {
      this.cart.push(id)
    }
  }
});
</script>
