<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-handson
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <form @submit.prevent="onSubmit">
        <input class="input" type="text" placeholder="Input GitHub ID" v-model="id">
      </form>
    </div>
    <div class="section has-text-centered">
      <h3 class="subtitle">History</h3>
      <ul>
        <li v-for="user in users" :key="user.login">
          <nuxt-link :to="`/users/${user.login}`">
            {{user.login}}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    AppLogo
  },
  asyncData() {
    return {
      id: null
    }
  },
  computed: {
    ...mapGetters('users', ['users'])
  },
  methods: {
    onSubmit() {
      this.$router.push(`/users/${this.id}`)
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

