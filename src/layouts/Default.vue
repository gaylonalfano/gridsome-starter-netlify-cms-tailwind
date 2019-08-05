<template>
  <div class="max-w-4xl m-auto pl-20 items-center mb-20 h-80">
    <header class="flex justify-between items-center mb-20 h-80">
      <strong>
        <g-link exact to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/blog">Blog</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style src="../styles.css" />