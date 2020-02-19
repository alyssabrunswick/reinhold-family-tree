<template>
  <article>
    <img
      v-if="$page.contentfulPerson.images[0]"
      v-bind:src="$page.contentfulPerson.images[0].file.url"
    />
    <h2>
      {{ $page.contentfulPerson.firstName }}
      {{ $page.contentfulPerson.lastName }}
    </h2>
  </article>
</template>

<page-query>
query ContentfulPerson($id: ID!) {
  contentfulPerson(id: $id)  {
    id
    firstName
    lastName
    birthDate
    images(limit: 1) {
      file {
        url
      }
    }
  }
}
</page-query>
