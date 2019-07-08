<template>
  <div v-if="!isLoggedin">
    <h1>Login</h1>
    <form>
        <dl>
        <dt>Username:</dt>
        <dd>
        <input type = text value = "" v-model="username" placeholder=" Please input username! "/>
        </dd>

        <dt>Password:</dt>
        <dd><input type = password value = "" v-model="password"></dd>
        </dl>
        <button @click="submitForm($event)">SUBMIT</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'longin',
  data () {
    return {
      username: '',
      password: '',
      isLoggedin: false
    }
  },
  mounted () {
    this.isLoggedin = this.$store.getter.isLoggedin
  },
  methods: {
    submitForm () {
      event.preventDefault()
      let formData = new URLSearchParams()
      formData.append('username', this.username)
      formData.append('password', this.password)
      this.$axios.post('/checkID', formData)
        .then(res => {
          console.log(res.data)
          if (res.data === 'LOGIN_SUCCESS') {
            this.$router.back(-1)
            sessionStorage.setItem('username', this.username)
            this.$store.dispatch('logIn')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
