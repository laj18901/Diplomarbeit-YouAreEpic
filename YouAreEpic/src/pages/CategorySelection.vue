<template>
  <div id="app" >
    <!--#############################################################-->
    <seperator text="Wählen Sie Ihre Interessen"></seperator>
    <!--#############################################################-->
    <div id="categories" v-for="cat in categories" >
      <card :title="cat.name"></card>
    </div>

    <div class="buttons">
      <main-button text="Auswahl bestätigen" @click.native="nextPage"></main-button>
      <br>
      <main-button text="Alles Anzeigen " @click.native="nextPage" ></main-button>
    </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import MainButton from '@/components/MainButton'
import axios from 'axios'
import Seperator from '../components/Seperator'

export default {
  name: 'App',
  components: {
    Seperator,
    MainButton,
    Card
  },
  data () {
    return {
      categories: '',
      user: ''
    }
  },
  methods: {
    nextPage () {
      this.$router.push('/ngolist')
      console.log('CLICK')
    },

    debug () {
      console.log(this.categories)
    }

  },
  beforeCreate () {
    axios
      .get('https://localhost:44328/categories')
      .then(response => (this.categories = response.data.categories))
  }
}
</script>

<style scoped>
#app {
  text-align: center;
  color: #2c3e50;
  /*display: flow-root;*/
  justify-content: center;

}

  #categories {
    justify-content: center;
    display: inline-flex;
    margin-top: 3vw;
  }

  .buttons{
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

#login{

}

</style>
