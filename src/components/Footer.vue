// components/Footer.vue
<template>
  <footer class="text-center tracking-wide p-10 bg-gray-600 text-white">
    Copyright {{ getCurrentYear }} by
    <a
      v-bind:href="href"
      class="text-teal-200 hover:text-white"
    >Gaylon Alfano</a>
  </footer>
</template>

<script>
export default {
  data: () => ({
    href: "http://gaylonalfano.com"
  }),
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>