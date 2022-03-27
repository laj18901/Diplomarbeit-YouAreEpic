<template>
  <div>
    <div id="items" v-for="ngo in ngos" >
      <ngoitem :name=ngo.name :description=ngo.description :short-description="ngo.shortDescription" :id=ngo.id></ngoitem>
    </div>
  </div>

</template>

<script>
import ngoitem from '../components/NGOItem.vue'
import axios from 'axios'

export default {
  name: 'NGOList',
  components: {
    ngoitem
  },
  data () {
    return {
      ngos: {}
    }
  },

  methods: {
    debug () {
      console.log(this.ngos)
    }

  },

  mounted () {
    axios.get('https://localhost:44328/npos')
      .then(response => (this.ngos = response.data.npOs))
  }

}
</script>

<style scoped>
#app{
  color: #2c3e50;
 /* margin-top: 10px;*/
  justify-content: center;

}

#items{
  align-content: center;
  margin-top: 20px;
}

</style>
