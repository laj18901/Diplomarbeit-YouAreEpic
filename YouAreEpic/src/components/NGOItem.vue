<template>
  <div id="wrapper" class="wrapper" :style="selectedStyleWrapper" >
  <button id="item" :style="selectedStyleButton" class="item" @click="openDetails">
    <img src="../assets/wwf.jpg" alt="" id="logo">
    <span id="name">{{name}}</span>
  </button>
  <div v-if="openDetail" id="details" >
  <p id="detail">{{description}}</p>
    <!--<div id="buttons">-->
    <div id="buttons">
    <button class="button">Website</button>
    <button class="button" @click="openPayment">Spenden</button>
    </div>
    <!--</div>-->
  </div>
  </div>
</template>

<script>
export default {
name: "ngoitem",
  props: {
    logo: String,
    name: String,
    description: String,
    website: String
  },

  data() {
    return {
      openDetail: false
    }
  },

  methods: {
  openDetails(){
    this.openDetail = !this.openDetail
  },

  openPayment(){
    this.$router.push('/payment')
  }

  },
  computed: {
  selectedStyleButton(){
    if(this.openDetail){
      return {
        backgroundColor: 'var(--highlightA)'
      }
    }else{
      return ''
    }
  },
    selectedStyleWrapper(){
      if(this.openDetail){
        return {
          border: "none",
          boxShadow: "0 0 0 2pt var(--highlightA)",
          outline: "none",
          transition: ".1s",
        }
      }else{
        return ''
      }
    }
  }
}
</script>

<style scoped>

.popup-enter-active, .popup-leave-activ {
  transition: opacity .9s;
}
.popup-enter, .popup-leave-to  {
  opacity: 0;
}

#logo{
  border-radius: 50%;
  width: auto;
  height: 8vh;
  margin: 10px;
}

.button{
  background-color: var(--highlightB);
  border: none;
  color: white;
  padding: 2vh 2vh;
  text-align: center;
  text-decoration: none;
  width: 30%;
  height: 10%;
  font-size: 1em;
  margin: 0px 8px 8px 8px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  border-radius: 10px;
  align-self: center;
}

.button:hover {
  background-color: #BA2660;
  color: #FFFFFF;
}

.button:focus-visible{
  outline: var(--highlightB) 2px solid;
  outline-offset: 3px;
}


#name{
  color: white;
  font-size: 5em;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-self: center;
}

#detail{
  margin: 10px;
  color: var(--textColor);

}
#details{
  width: inherit;
  text-align: left;
  display: block;
  border-radius: 10px;
  transition-duration: 0.5s;
}

#wrapper{
  display: block;
  margin-bottom: 10px;
  border-radius: 10px;

}
#item {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.75vw;
  display: flex;
  color: #FFFFFF;
  width: 100%;
  height: 10vh;
  background-color: var(--primary);
  border: none;
  border-radius: 10px;
  margin-bottom: 5px;
  align-content: center;
  }

#item:focus-visible {
  outline: var(--primary) 3px solid;
  outline-offset: 4px;
 }

  .item {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }

  .item:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    background-color:#F3F8F9 ;
    cursor: pointer;
  }

  #buttons{
    justify-content: center;
    display: flex;
  }



</style>
