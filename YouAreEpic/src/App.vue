<template>
  <div id="app" >
    <div style="width: 100%; height: 3vh; border-bottom: 1px solid black; text-align: center">
  <span style="" id="seperator">
    Wählen sie Ihre Interessen <!--Padding is optional-->
  </span>
    </div>
    <div id="categories">
      <card source="" title="Tiere"></card>
      <card source="" title="Kinder"></card>
      <card source="" title="Umwelt"></card>
      <card source="" title="Krankheiten"></card>
    </div>

    <div id="buttons">
      <main-button text="Auswahl bestätigen"></main-button>
      <br>
      <main-button text="Alles Anzeigen "></main-button>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'
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
  margin-top: 3vw;
  /*display: flex;*/
  justify-content: center;
}
#categories{
  display: flex;
  justify-content: center;
  margin-top: 3vw;
}

@media only screen and (max-width: 768px) {
  #buttons {
    margin-top: 30vh;

  }
}
@media only screen and (min-width: 768px) {
  #buttons {
    vertical-align: bottom;
    justify-content: end;
  }
}
@media only screen and (min-width: 768px) {
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
}


</style>
