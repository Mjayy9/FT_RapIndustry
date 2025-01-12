<template>
  <h1 class="titles d-flex justify-center">CONTACT US!</h1>

  <v-container class="d-flex h-full w-48 justify-center">
    <v-card>
      <v-card-title class="titles font-weight-bold">You can contact us!</v-card-title>
      <v-card-text>Email: marian.sebora9@gmail.com</v-card-text>
      <v-card-text>Phone Number: +421 917 174 059</v-card-text>
    </v-card>
  </v-container>

  <v-sheet class="mx-auto formular" width="600" style="border-radius: 10px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <v-form ref="form">
      <v-text-field v-model="name" :counter="20" :rules="nameRules" label="Name" required></v-text-field>
      <v-text-field v-model="email" :counter="30" :rules="emailRules" label="Email" required></v-text-field>
      <v-select v-model="select" :items="items" :rules="[v => !!v || 'Problem is required']" label="Problem" required></v-select>
      <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Consent to the processing of personal data" required></v-checkbox>
      <div class="d-flex flex-column">
        <v-btn class="mt-4" color="success" block style="font-size: 14px; padding: 8px;" @click="validate">Sent</v-btn>
        <v-btn class="mt-4" color="primary" block style="font-size: 14px; padding: 8px;" @click="reset">Reset Formular</v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
export default {
  data: () => ({
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 20) || 'Name must be 20 characters or less',
    ],
    email: '',
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Must be a valid email',
    ],
    select: null,
    items: [
      'Something went wrong',
      'Something is missing',
      'Store is broken',
      'Cart is not working',
    ],
    checkbox: false,
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert('Your Form is Valid. Thank you for your request');
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
