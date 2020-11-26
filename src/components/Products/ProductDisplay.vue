<template>
   <div class="product-display">

    <div class="product-container">
      <div class="product-image">
        <img :src="image" />
      </div>

      <div class="product-info">
        <h1>{{ productName }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>

        <ul>
          <li v-for="(detail, key) in details" v-bind:key="key">{{ detail }}</li>
        </ul>

        <div class="color-circle"
          v-for="(variant, index) in variants"
          :key="variant.id"
          :style="{ backgroundColor: variant.color }"
          @mouseover="updateProduct(index)"
          >
        </div>

        <button class="button" v-on:click="addToCart"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
          >
        Add to cart
        </button>
      </div>
    </div>

    <ReviewList :reviews="reviews"></ReviewList>
    <ReviewForm @review-submitted="addReview" ></ReviewForm>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Variant } from '@/types';
import ReviewForm from '../Reviews/ReviewForm.vue'
import ReviewList from '../Reviews/ReviewList.vue'

export default defineComponent({
    name: "ProductDisplay",
    components: {
      ReviewForm,
      ReviewList
    },
    props: {
        premium: {
            type: Boolean,
            require: true
        }
    },
    data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: [
          '80% cotton',
          '20% polyester',
          'Gender-neutral'
      ] as string[],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/hoge.jpg',
          quantity: 10
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/fuga.jpg',
          quantity: 0
        }
      ] as Variant[],
      reviews: [] as string[],
      tabs: [
          'review-form',
          'review-list'
      ] as string[],
      activeTab: 'review-form'
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateProduct(index: number) {
      this.selectedVariant = index
    },
    addReview(review: string) {
      this.reviews.push(review)
    }
  },
  computed: {
    productName(): string {
      return this.brand + ' ' + this.product
    },
    image(): string {
      return this.variants[this.selectedVariant].image
    },
    inStock(): number {
      return this.variants[this.selectedVariant].quantity
    },
    shipping(): string {
      if (this.premium) {
        return 'Free'
      }
      return '2.99'
    }
  }
});
</script>