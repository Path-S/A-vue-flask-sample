<template>
  <div class="hello" v-if="isLoggedin">
    <h1>Welcome, {{user}}</h1>
    <button @click="logOut">logOut</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      isLoggedin: false,
      user: ''
    }
  },
  mounted () {
    this.user = sessionStorage.getItem('username')
    this.isLoggedin = this.$store.getters.isLoggedin
  },
  methods: {
    logOut () {
      sessionStorage.removeItem('username')
      this.$store.dispatch('logOut')
      window.location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
