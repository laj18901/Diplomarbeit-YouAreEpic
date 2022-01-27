<template>
  <div id="app" >
    <div id="background">
    <div style="width: 100%; height: 3vh; border-bottom: 1px solid black; text-align: center">
  <span style="" id="seperator">
    Wählen sie Ihre Interessen <!--Padding is optional-->
  </span>
      <button id="login">LOGIN</button>
    </div>
    <div id="categories">
      <card source="" title="Tiere"></card>
      <card source="" title="Kinder"></card>
      <card source="" title="Umwelt"></card>
      <card source="" title="Krankheiten"></card>
      <card source="" title="Lorem"></card>
    </div>

    <div id="buttons">
      <main-button text="Auswahl bestätigen" @click.native="nextPage"></main-button>
      <br>
      <main-button text="Alles Anzeigen " @click.native="nextPage" ></main-button>
    </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import MainButton from "@/components/MainButton";

export default {
  name: 'App',
  components: {
    MainButton,
    Card
  },
  data() {
    return {
    }
  },
  methods: {
    nextPage(){
      this.$router.push('/ngolist')
      console.log('CLICK')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*display: flow-root;*/

  justify-content: center;

}


  #categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3vw;
  }

  #buttons{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 20px;
  }


/*#buttons{
  position: fixed;
  bottom: 0;
  right: 40%;
  left: 40%;
}*/
/*@media only screen and (max-width: 768px) {
  #buttons {
    margin-top: 30vh;

  }
}*/
/*@media only screen and (min-width: 768px) {
  #buttons {
    vertical-align: bottom;
    justify-content: end;
  }
}*/
/*@media only screen and (min-width: 768px) {
  #seperator{
    font-size: 2vw;
    background-color: #FFFFFF
  }
}
@media only screen and (max-width: 768px) {
  #seperator{
    font-size: 2vh;
    background-color: #FFFFFF
  }
}*/

#seperator{
  background-color: #FFFFFF;
  font-size: 2em;
}

#login{

}


</style>
