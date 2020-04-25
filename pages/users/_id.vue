<template>
  <div class="columns">
    <div class="column is-4 is-offset-4" v-if="user">
      <section class="card">
        <div class="card-content">
          <div class="card-image">
            <figure class="image is-square">
              <img :src="user.avatar_url" alt="Placeholder image">
            </figure>
          </div>
          <div class="content">
            <h1 class="title has-text-centered">
              @{{user.login}}
            </h1>
            <p>
              {{user.bio}}
            </p>
            <p>
              <a target="_blank" :href="user.html_url">
                GitHub へ
              </a>
            </p>
            <p class="has-text-centered">
              <nuxt-link to="/">
                TOP へ戻る
              </nuxt-link>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  head() {
    return {
      title: `${this.name} のプロフィールページ`
    }
  },
 async asyncData({ app, params, error, store }) {
    try {
      const { id } = params
      await store.dispatch('users/fetchUser', { id })
      await store.dispatch('users/setActiveUser', { id })
      const user = store.getters['users/activeUser']
      return {
        id,
        name: user.name
      }
    } catch (e) {
      return error({
        statusCode: 404,
        message: 'User not found'
      })
    }
  },
  computed: {
    ...mapGetters('users', {
      user: 'activeUser'
    })
  }
}
</script>

<style scoped>
</style>
