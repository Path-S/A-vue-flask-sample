<template>
    <div v-bind:class="{mark: 1}">
        <ul>{{usrname}}'s score is {{ score }}</ul>
    </div>
</template>

<script>
export default {
  name: 'sunlu',
  data () {
    return {
      score: 90,
      usrname: 'sunlu'
    }
  }
}
</script>

<style>
  .mark{
    text-align: left;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 50;
    padding: 50;
  }
</style>
