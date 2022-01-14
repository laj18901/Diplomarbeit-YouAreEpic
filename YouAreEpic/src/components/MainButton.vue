<template>
  <button id="prettybutton">{{text}}</button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    text: String,
  }
}
</script>

<style scoped>


@media only screen and (min-width: 768px) {
  #prettybutton {
    background-color: #FD9D9A;
    border: none;
    color: white;
    padding: 2vh 2vh;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1em;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    border-radius: 10px;
  }

  #prettybutton:hover {
    background-color: #BA2660;
    color: #FFFFFF;
  }
}

@media only screen and (max-width: 768px) {
  #prettybutton {
    background-color: #FD9D9A;
    border: none;
    color: white;
    padding: 1vh 1vh;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1em;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    border-radius: 10px;
  }

  #prettybutton:hover {
    background-color: #BA2660;
    color: #FFFFFF;
  }
}

</style>
