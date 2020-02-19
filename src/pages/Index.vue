<template>
  <Layout>
    <h1 class="font-display">Reinhold Family</h1>
    <g-image
      src="~/assets/images/1943-08-29.jpg"
      width="1500"
      style="width: 100%"
    />

    <ul id="example-1">
      <li v-for="item in $static.allPage" v-bind:key="item.context.id">
        <g-link :to="item.path">{{ item.context.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<static-query>
query {
 	allPage {
    path
    context
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "Reinhold Family"
  }
};
</script>
