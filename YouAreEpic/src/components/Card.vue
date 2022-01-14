<template>
  <div id="card" class="card" :style="filterStyle" @click="show = !show">
    <div class="container">
      <h1>{{title}}</h1>
    </div>
    <img src="../assets/animal-6628303.svg" alt="Tier" width="100%" height="*">
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    source: String,
    title: String
  },
  data() {
    return {
      show: false
    }

  },
  computed: {
    filterStyle(){
      if (this.show){
        return {
          border: "none",
          borderRadius: "2pt",
          boxShadow: "0 0 0 2pt #3A93A7",
          outline: "none",
          transition: ".1s"
        }
      }else{
        return ''
      }
    }
  }

}
</script>

<style>




@media only screen and (min-width: 768px) {
  #card {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.75vw;
    text-align: center;
    color: #2c3e50;
    margin-top: 0vh;
    margin-left: 1vw;
    margin-right: 1vw;
    width: 30vw;
  }

  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    background-color:#F3F8F9 ;
  }
}

@media only screen and (max-width: 768px) {

  #card {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.5vw;
    text-align: center;
    color: #2c3e50;
    margin-top: 0vh;
    margin-left: 1vw;
    margin-right: 1vw;
    width: 10vh;
  }

  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    background-color:#F3F8F9 ;
  }
}


/* On mouse-over, add a deeper shadow */

/* Add some padding inside the card container */
.container {
  /*padding: 2px 16px;*/
}
</style>
