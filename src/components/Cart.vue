<template>
  <h1 class="titles d-flex justify-center">CART</h1>

  <v-container class="d-flex flex-column h-full w-48 justify-center">
    <v-card>
      <v-card-title class="titles font-weight-bold">Your Shopping Cart</v-card-title>
      <v-card-subtitle class="font-weight-bold">
        <template v-if="cartItems.length"> Below are the items in your cart.</template>
        <template v-else> Your Cart is empty.</template>
        <v-btn @click="goToStore" color="primary" class="font-weight-bold mt-4 mb-4 ml-2">View Store</v-btn>
      </v-card-subtitle>

      <v-card-text v-if="cartItems.length">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <p class="font-weight-bold">{{ item.name }} - {{ item.price }} €</p>
          <v-btn color="error" @click="removeFromCart(item.id)" class="mt-2"> Remove </v-btn>
        </div>
        <p class="font-weight-bold text-decoration-underline text-pink">Total Price: {{ totalPrice }} €</p>
      </v-card-text>

      <v-card-actions v-if="cartItems.length">
        <v-btn @click="clearCart" color="warning" class="font-weight-bold mt-4 ml-2">Clear Cart</v-btn>
        <v-btn @click="goToThankYouPage" color="success" class="font-weight-bold mt-4 ml-4">Proceed to Purchase</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCartStore } from '@/stores/counter';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "Cart",
  setup() {
    const cartStore = useCartStore();
    const router = useRouter();

    const cartItems = computed(() => cartStore.items);
    const totalPrice = computed(() => cartStore.totalPrice);

    const goToThankYouPage = () => {
      if (cartItems.value.length > 0) {
        router.push("/thankyoupage");
      } else {
        alert("Your cart is empty!");
      }
    };

    const goToStore = () => {
      router.push("/store");
    };

    const removeFromCart = (itemId: string) => {
      cartStore.removeFromCart(itemId);
    };

    const clearCart = () => {
      if (confirm("Are you sure you want to clear the cart?")) {
        cartStore.clearCart();
      }
    };

    return { cartItems, totalPrice, goToThankYouPage, goToStore, removeFromCart, clearCart };
  },
});
</script>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>
