<template>
  <div class="container mx-auto px-20 pb-20 max-w-full">
    <header>
      <Navbar />
    </header>
    <slot />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style src="../styles.css" />