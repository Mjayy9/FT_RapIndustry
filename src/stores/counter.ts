import { defineStore } from 'pinia';

interface Product {
  id: string;
  name: string;
  price: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Product[],
  }),
  actions: {
    addToCart(product: Product) {
      const itemInCart = this.items.find((item) => item.id === product.id);
      if (itemInCart) {
        this.items.push(product);
      } else {
        this.items.push(product);
      }
      this.saveCartToLocalStorage();
    },
    clearCart() {
      this.items = [];
      this.saveCartToLocalStorage();
    },
    removeFromCart(productId: string) {
      this.items = this.items.filter((item) => item.id !== productId);
      this.saveCartToLocalStorage();
    },
    saveCartToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    },
  },
  getters: {
    totalPrice: (state) => {
      return state.items.reduce((sum, item) => sum + item.price, 0);
    },
    totalItems: (state) => {
      return state.items.length;
    },
  },
});
