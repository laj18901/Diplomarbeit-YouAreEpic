<template>
  <div class="wrapper">
    <h1 class="header">DANKE!</h1>
    <p class="text">Die Spende wurde erfolgreich durchgeführt!</p>
    <button class="button" style="align-self: center; word-wrap: break-word; width: 30%" @click="this.$router.push('/post')">Teile jetzt deinen Epic Moment mit deiner Community
    </button>
  </div>

</template>

<script>
export default {
name: "PaymentSuccesfull"
}
</script>

<style scoped type="scss">
@import url('https://fonts.googleapis.com/css?family=Jost');


.wrapper{
  text-align: center;
  font-family: Jost;
  font-style: normal;
  margin-top: 10rem;
  color: $primary;
}

.header{
  font-size: 3rem;
}

.text{
  font-size: 1.5rem;
}

</style>