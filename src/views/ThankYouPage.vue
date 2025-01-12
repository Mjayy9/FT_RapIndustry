<template>
  <v-container class="thank-you-container d-flex flex-column align-center justify-center py-10">
    <v-card elevation="4" class="pa-6" max-width="600">
      <v-card-title class="titles text-h5 font-weight-bold justify-center"> Thank You for Your Order! </v-card-title>

      <v-card-text>
        <br>
        <p> All informations will be available in your email. </p><br>
        <p class="text-center"> Your order has been successfully received. Below are the details of your order:</p>
        <div class="order-summary mt-5">
          <h2 class="text-h6 font-weight-bold titles">Ordered Products:</h2>
          <div v-if="cartItems.length === 0" class="mt-3">
            <p>No products ordered.</p>
          </div>
          <v-list v-else>
            <v-list-item v-for="item in cartItems" :key="item.id" class="order-item">
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>€{{ item.price }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </div>

        <div class="total-price mt-5">
          <h3 class="text-h6 font-weight-bold">
            Total Price: €{{ totalPrice.toFixed(2) }}
          </h3>
        </div>
      </v-card-text>

      <v-card-actions class="justify-center mt-5">
        <v-btn @click="goBackHome" color="primary" class="font-weight-bold"> Go Back to Store </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCartStore } from '@/stores/counter';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ThankYouPage',
  setup() {
    const cartStore = useCartStore();
    const router = useRouter();

    // Using computed properties for reactivity
    const cartItems = computed(() => cartStore.items);
    const totalPrice = computed(() => cartStore.totalPrice);

    const goBackHome = () => {
      cartStore.clearCart();
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


