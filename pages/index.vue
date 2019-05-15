<template lang="pug">
.main-page
  LoginButton(@click.native="signin")
</template>

<script>
import LoginButton from '~/components/button.vue'

export default {
  components: {
    LoginButton
  },
  methods: {
    signin() {
      window.OAuth.initialize('RTOLJPAb72jhFppq2Agf9Ag4DrE')

      window.OAuth.popup('github')
        .then(github => {
          this.$store.dispatch('setAuth', true)
          github.me().then(data => {
            console.log('data: ', data)
          })

          github.get('/user').then(data => {
            this.$store.dispatch('setUserDataAction', data)
          })

          github.get('/user/repos').then(data => {
            this.$store.dispatch('setUserReposAction', data)
          })
        })
        .then(() => {
          this.$router.push('profile')
        })
    }
  }
}
</script>

<style lang="scss">
.main-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
