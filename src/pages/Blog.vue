// pages/Blog.vue
<template>
  <Layout>
    <h1 class="text-5xl font-semibold mb-4 border-b">Latest Posts</h1>
    <article class="block mb-2" v-for="edge in $page.allPost.edges" v-bind:key="edge.node.id">
      <g-link v-bind:to="edge.node.path" class="text-3xl font-medium">{{ edge.node.title }}</g-link>
      <p class="font-light">{{ edge.node.excerpt }}</p>
      <p class="text-teal-400">Published {{ edge.node.date }} • {{ edge.node.timeToRead }} min read</p>
      <!-- <div v-html="edge.node.content" /> -->
      <div>
        <g-link
          v-for="tag in edge.node.tags"
          v-bind:key="tag.id"
          v-bind:to="tag.path"
          class="pr-2"
        >#{{ tag.id }}</g-link>
      </div>
    </article>
    <Pager
      v-bind:info="$page.allPost.pageInfo"
      linkClass="tx-xs tracking-wide pt-10 px-5 hover:underline"
    />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        excerpt
        title
        date (format: "MMMM Do, YYYY")
        timeToRead
        path
        tags {
          id
          path
        }
        cover_image (width: 1000, height: 300, quality: 100, blur: 20)
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager
  }
};
</script>

