<template>
  <div class="thank-you-container">
    <h1>Thank You for Your Order!</h1>
    <br>
    <p>Your order has been successfully placed. Below are the details of your order:</p>
    <br>

    <div class="order-summary">
      <h2>Ordered Products:</h2>
      <br>
      <div v-if="cartItems.length === 0">
        <p>No products ordered.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="item in cartItems" :key="item.id" class="order-item">
            <span>{{ item.name }} - €{{ item.price }}</span>
          </li>
        </ul>
      </div>
    </div>
    <br>
    <div class="total-price">
      <br>
      <h3>Total Price: {{ totalPrice.toFixed(2) }} €</h3>
    </div>
    <br>
    <button @click="goBackHome" class="go-home-button">Go Back to Store</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/counter.ts';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ThankYouPage',
  setup() {
    const cartStore = useCartStore();
    const router = useRouter();

    const cartItems = cartStore.items; // Prístup k položkám zo store
    const totalPrice = cartStore.totalPrice; // Použitie getteru pre výpočet ceny

    const goBackHome = () => {
      router.push("/store");
    };

    return {
      cartItems,
      totalPrice,
      goBackHome,
    };
  },
});
</script>
