<template>
  <div id="app">
    <!--#############################################################-->
    <seperator text="Wählen Sie einen Betrag"></seperator>
    <!--#############################################################-->
    <ngoitemdetailed :name=ngo.name :description=ngo.description :short-description="ngo.shortDescription" :id=ngo.id></ngoitemdetailed>
    <div id="form">
      <div id="buttonwrapper">
        <button class="button">1€</button>
        <button class="button">2€</button>
        <button class="button">5€</button>
        <button class="button">10€</button>
      </div>
        <div class="textfieldwrapper">
          <label id="label">Eigenen Betrag</label>
        <input class="textfield"/>
        </div>
    </div>
  </div>

</template>

<script>
import Seperator from '../components/Seperator'
import ngoitemdetailed from '../components/NGOItemDetailed'
import axios from 'axios'
export default {
  name: 'Payment',
  components: {
    Seperator,
    ngoitemdetailed
  },
  methods: {
  },
  mounted () {
    axios.get(`https://localhost:44328/npos/${this.id}`)
      .then(response => (this.ngo = response.data))
  },

  created () {
    let x = this.$route.params
    this.id = x['ngoid']
  },

  data () {
    return {
      id: '',
      ngo: {}
    }
  }

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Jost');
#label{
  font-family: Jost;
  font-style: normal;
}

#app{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 10px;*/
  justify-content: center;
}

#form{
  justify-content: center;
  justify-self: center;
  display: grid;
}

#buttonwrapper{
  width: 100%;
  margin-top: 100px;
  justify-content: center;
  justify-self: center;
  display: flex;
}

.button{
  background-color: var(--highlightB);
  border: none;
  color: white;
  padding: 7% 16%;
  text-align: center;
  text-decoration: none;
  margin: 0px 8px 8px 8px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  border-radius: 10px;
  font-size: 1.5em;
}

.button:hover {
  background-color: #BA2660;
  color: #FFFFFF;
}

.button:focus-visible{
  outline: var(--highlightB) 2px solid;
  outline-offset: 3px;
}

.textfieldwrapper{
  position: relative;
  margin-left: -3%;
}
.textfieldwrapper>label{
  padding:0 0.2em;
  position:absolute;
  top:-0.5em;
  left:1em;
  background-color:white;
}

.textfieldwrapper>input{
  padding:0.8em;
  border-radius: 0.5em;
  border: 2px solid var(--highlightB);
  outline:none;
}
.textfieldwrapper>input:focus-visible{
  border: 3px solid var(--highlightA);
}
</style>
