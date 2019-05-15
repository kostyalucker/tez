<template lang='pug'>
  .profile-page
    el-row.details(v-if="userData" :gutter="20")
      el-col(:span="3")
        img.avatar(:src="userData.avatar_url")
      el-col(:span="6")
        .username {{ userData.name }}
    el-row(v-if="userRepos")
      ul.list(v-for="repo in userRepos")
        li.item
          a.link(:href="repo.html_url" target="_blank") {{ repo.html_url }}
</template>

<script>
import { mapState } from 'vuex'
export default {
  middleware: 'auth',
  name: 'profile-page',
  computed: {
    ...mapState({
      userData: state => state.userData,
      userRepos: state => state.userRepos
    })
  }
}
</script>

<style lang='scss' scoped>
$page-padding: 50px;

.profile-page {
  padding: $page-padding;
  min-height: 100vh;
  .details {
    margin-bottom: 40px;
    .avatar {
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }
  }

  .list {
    list-style: none;
    padding: 0;
  }
}
</style>
