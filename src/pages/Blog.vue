// pages/Blog.vue
<template>
  <Layout>
    <h1>Blog page</h1>
    <article style="mb-2" v-for="edge in $static.allPost.edges" v-bind:key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
      <p>{{ edge.node.excerpt }}</p>
      <p>Published {{ edge.node.date }}</p>
      <div v-html="edge.node.content" />
    </article>
  </Layout>
</template>

<static-query>
{
  allPost {
    edges {
      node {
        id
        content
        title
        date (format: "MMMM Do, YYYY")
      }
    }
  }
}
</static-query>

