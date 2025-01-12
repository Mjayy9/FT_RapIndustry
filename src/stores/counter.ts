import { defineStore } from 'pinia';

interface Product {
  id: string;
  name: string;
  price: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Product[], // pole položiek v košíku
  }),
  actions: {
    addToCart(product: Product) {
      const itemInCart = this.items.find((item) => item.id === product.id);
      if (itemInCart) {
        this.items.push(product); // Produkt sa len pridá, ak už v košíku nie je
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
    loadCartFromLocalStorage() {
      const cartJson = localStorage.getItem('cartItems');
      if (cartJson) {
        try {
          const cartData = JSON.parse(cartJson);
          if (Array.isArray(cartData)) {
            this.items = cartData;
          }
        } catch (e) {
          console.error('Chyba pri načítaní košíka z localStorage:', e);
        }
      }
    },
    addFromVueStore(product: Product) { // Pridaná akcia pre zobrazenie produktov z Vue komponenty
      this.addToCart(product);
    }
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
