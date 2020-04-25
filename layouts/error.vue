<template>
  <section>
    <div class="has-text-centered">
      <h1 class="title">
        {{error.message}}
      </h1>
      <p>
        <nuxt-link to="/">
          TOP へ戻る
        </nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
section {
  background: #fff;
  height: calc(100vh - 32px);
}
</style>

