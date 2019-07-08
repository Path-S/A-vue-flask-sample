<template>
    <div class="mark" v-if="isLoggedin">
        <ul>{{username}}'s score is {{ score }}</ul>
    </div>
    <div class="mark" v-else>
        <ul>Please login first ! </ul>
        <button @click="logIn">logIn</button>
    </div>

</template>

<script>
export default {
  name: 'sunlu',
  data () {
    return {
      score: 90,
      usrname: '',
      isLoggedin: false
    }
  },
  mounted () {
    this.username = sessionStorage.getItem('username')
    this.isLoggedin = this.$store.getters.isLoggedin
  },
  methods: {
    logIn () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
  .mark{
    text-align: center;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 50;
    padding: 50;
  }
</style>
