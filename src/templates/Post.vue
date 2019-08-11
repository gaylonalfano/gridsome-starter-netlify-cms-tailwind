<template>
  <Layout>
    <h1 class="text-5xl font-semibold mb-4">{{ $page.post.title }}</h1>
    <time>{{ $page.post.date }}</time>
    <article class="items-center justify-center">
      <g-image v-bind:src="$page.post.cover_image" />
      <p v-html="$page.post.content" />
    </article>
  </Layout>
</template>

<page-query>
query ($path:String!) {
  post(path: $path) {
    cover_image (width: 1000, height: 300, blur: 70, fit: cover)
    content
    title
    tags
    date (format: "MMMM Do, YYYY")
  }
}
</page-query>
