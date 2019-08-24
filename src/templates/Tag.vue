<template>
  <Layout>
    <h1 class="text-5xl font-semibold mb-4">#{{ $page.tag.title }}</h1>
    <div v-for="edge in $page.tag.belongsTo.edges" v-bind:key="edge.id">
      <p>{{ edge.node.title }}</p>
      <p>{{ edge.node.excerpt }}</p>
    </div>
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