<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCartStore } from '@/stores/counter.ts';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "Cart",
  setup() {
    const cartStore = useCartStore();
    const router = useRouter();

    // Používame computed pre reaktivitu
    const cartItems = computed(() => cartStore.items);
    const totalPrice = computed(() => cartStore.totalPrice);

    const goToThankYouPage = () => {
      router.push("/thankyoupage");
    };

    const removeFromCart = (itemId: string) => {
      cartStore.removeFromCart(itemId); // Stav sa upraví v Pinia
    };

    const clearCart = () => {
      cartStore.clearCart(); // Stav sa upraví v Pinia
    };

    return { cartItems, totalPrice, goToThankYouPage, removeFromCart, clearCart };
  },
});
</script>

<template>
  <h1 class="titles d-flex justify-center">CART</h1>

  <v-container class="d-flex h-full w-48 justify-center">
    <v-card v-if="cartItems.length">
      <v-card-title> CART </v-card-title>
      <v-card-subtitle>Your Shopping Cart</v-card-subtitle>
      <v-card-text>
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <p>{{ item.name }} - {{ item.price }} €</p>
          <v-btn color="error" @click="removeFromCart(item.id)">
            Remove
          </v-btn>
        </div>
      </v-card-text>
      <v-btn @click="goToThankYouPage" color="success" class="mt-4">Proceed to Purchase</v-btn>
    </v-card>
    <p v-else class="font-weight-bold">Cart is empty.</p>
    <p class="font-weight-bold">Total Price: {{ totalPrice }} €</p>
  </v-container>
</template>
