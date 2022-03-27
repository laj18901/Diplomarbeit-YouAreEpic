<template>
  <div style="width: 100%; height: 3vh; border-bottom: 1px solid black; text-align: center">
  <span style="" id="seperator">
    {{text}}
  </span>
  </div>
</template>

<script>
export default {
  name: 'Seperator',
  props: {
    text: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Jost');
#seperator{
  background-color: #FFFFFF;
  font-size: 2em;
  margin-bottom: 10px;
  font-family: Jost;
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
}

</style>
