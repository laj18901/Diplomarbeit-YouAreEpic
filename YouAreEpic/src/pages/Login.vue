<template>
  <div>
  <button @click="this.$router.push('/.auth/login/twitter')"> Log in via Twitter</button>
  <button @click="this.$router.push('/selection')"> Weiter als Gast</button>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>
