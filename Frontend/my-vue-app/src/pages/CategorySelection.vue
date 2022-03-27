<template>
  <div class="categories">
    <div  v-for="cat in categories" >
      <card :title="cat.name"></card>
    </div>


    </div>
  <div class="buttons">
    <button class="button" style="width: 40%" @click.native="nextPage">Auswahl bestätigen</button>
    <br>
    <button class="button"  style="width: 40%" @click.native="nextPage" >Alles Anzeigen </button>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
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
  .categories {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row;
    grid-template-rows: 1fr 1fr 1fr;
    gap: clamp(0.25rem,1vw,1rem);
  }

  .buttons{
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
  }

</style>
