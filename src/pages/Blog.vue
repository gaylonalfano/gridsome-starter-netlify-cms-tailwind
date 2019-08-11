// pages/Blog.vue
<template>
  <Layout>
    <h1 class="text-5xl font-semibold mb-4 border-b">Latest Posts</h1>
    <article class="block mb-2" v-for="edge in $static.allPost.edges" v-bind:key="edge.node.id">
      <g-link v-bind:to="edge.node.path" class="text-3xl font-medium">{{ edge.node.title }}</g-link>
      <p class="font-light">{{ edge.node.excerpt }}</p>
      <p class="text-teal-400">Published {{ edge.node.date }} • {{ edge.node.timeToRead }} min read</p>
      <!-- <div v-html="edge.node.content" /> -->
      <div>
        <span v-for="tag in edge.node.tags" v-bind:key="tag" class="pr-2">#{{ tag }}</span>
      </div>
    </article>
  </Layout>
</template>

<static-query>
{
  allPost {
    edges {
      node {
        id
        excerpt
        content
        title
        date (format: "MMMM Do, YYYY")
        timeToRead
        tags
        path
      }
    }
  }
}
</static-query>


