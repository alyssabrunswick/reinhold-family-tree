<template>
  <div class="layout h-screen flex flex-col items-center justify-center">
    <header class="header">
      <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->

      <!-- <nav class="nav">
        <g-link class="" to="/">Home</g-link>
      </nav>-->
    </header>
    <main class="main flex flex-col items-center">
      <slot />
    </main>
    <footer class="footer flex justify-center">
      <p>©{{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
main {
  margin: 0 auto;
  max-width: 80vw;
}
</style>
