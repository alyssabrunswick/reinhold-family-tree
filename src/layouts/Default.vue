<template>
  <div class="layout">
    <header class="header">
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>

      <!-- <nav class="nav">
        <g-link class="" to="/">Home</g-link>
      </nav>-->
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
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
body {
  font-family: "Calistoga", -apple-system, system-ui, Roboto, "Helvetica Neue",
    Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  height: 100vh;
  margin: 0 auto;
}

.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

main {
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 80vw;
}

.footer {
  display: flex;
  justify-content: center;
}
</style>
