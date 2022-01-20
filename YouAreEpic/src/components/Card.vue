<template>
  <button id="card" class="card" :style="filterStyle" @click="show = !show">
      <span id="title">{{title}}</span>
    <img src="../assets/animal-6628303.svg" alt="Tier" width="100%" height="*">
  </button>
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
          transition: ".1s",
          backgroundColor: '#E8F1F3'
        }
      }else{
        return ''
      }
    }
  }

}
</script>

<style>


#card:focus-visible {
  outline: var(--primary) 3px solid;
  outline-offset: 5px;
  border-radius: 10px;
  background-color: var(--primary-pressed);
  box-shadow: none;
}



#card {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.75vw;
  text-align: center;
  border: none;
  background-color: var(--backgroundA);
  color: var(--textColor);
  margin: 10px;
  width: 40%;
  border-radius: 10px;
  cursor: pointer;
}

@media (min-width: 930px) {
  #card{
    max-width: calc(100vw / 4);
  }
}



.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  background-color:var(--primary-hover);
}

/*@media only screen and (min-width: 768px) {
  #card {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.75vw;
    text-align: center;
    border: none;
    background-color: var(--backgroundA);
    color: var(--textColor);
    margin: 10px;
    width: 25%;
    border-radius: 10px;
  }*/

  /**.card {
    /* Add shadows to create the "card" effect */
   /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }*/

 /* .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    background-color:var(--primary-hover);
  }
}*/

/*@media only screen and (max-width: 768px) {

  #card {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.5vw;
    text-align: center;
    color: var(--textColor);
    margin: 5px;
    width: 25%;
    border-radius: 10px;
  }

  .card {*/
    /* Add shadows to create the "card" effect */
   /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    background-color:var(--primary-hover) ;
  }


}*/

#title{
  font-size: 4em;
}


/* On mouse-over, add a deeper shadow */

/* Add some padding inside the card container */
.container {
  /*padding: 2px 16px;*/
}
</style>
