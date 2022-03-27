<template>
  <div id="wrapper">
  <button class="button" @click="openTwitterLogin"> Log in via Twitter</button>
  <button class="button" @click="openGuest"> Weiter als Gast</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    openTwitterLogin () {
      this.$router.push('/.auth/login/twitter')
      console.log('CLICK')
    },

    openGuest () {
      this.$router.push('/selection')
      console.log('CLICK')
    }
  }

}
</script>

<style scoped>

.button {
  align-items: center;
  background: #f5f5fa;
  border: 0;
  border-radius: 8px;
  box-shadow: -10px -10px 30px 0 #fff,10px 10px 30px 0 #1d0dca17;
  box-sizing: border-box;
  color: #2a1f62;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  line-height: 1.5rem;
  padding: 25px;
  position: relative;
  text-align: left;
  transition: .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: pre;
  width: max-content;
  word-break: normal;
  word-spacing: normal;
}

.button:hover {
  background: #f8f8ff;
  box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17;
}

#wrapper{
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 100px; /* Need a specific value to work */
}

</style>
