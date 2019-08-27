<template>
  <Layout>
    <h1 class="text-5xl font-semibold mb-4">#{{ $page.tag.title }}</h1>
    <article v-for="edge in $page.tag.belongsTo.edges" v-bind:key="edge.id">
      <g-image v-bind:src="edge.node.cover_image" />
      <h2>{{ edge.node.title }}</h2>
      <p>{{ edge.node.excerpt }}</p>
      <p>Posted {{ edge.node.date }} • {{ edge.node.timeToRead }} min read</p>
    </article>
  </Layout>
</template>

<page-query>
query ($id: String!) {
  tag (id: $id) {
    title
    belongsTo {
      totalCount
      edges {
        node {
          ... on Post {
            id
            title
            excerpt
            cover_image (width: 1000, height: 300, blur: 70, fit: cover)
            date (format: "MMMM Do, YYYY")
            timeToRead
          }
        }
      }
    }
  }
}
</page-query>


<script>
export default {};
</script>

<style>
</style>