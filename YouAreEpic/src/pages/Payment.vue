<template>

  <button @click="getUserInfo"></button>

</template>

<script>
export default {
name: "Payment",
  methods: {
    async getUserInfo() {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      console.log(clientPrincipal)
      return clientPrincipal;
    }
  }
}

</script>

<style scoped>

</style>
