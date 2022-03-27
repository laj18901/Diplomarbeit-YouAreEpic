<template>

    <ngoitemdetailed :name=ngo.name :description=ngo.description :short-description="ngo.shortDescription" :id=ngo.id></ngoitemdetailed>
  <div class="container">
      <div class="buttonwrapper">
        <button class="moneyButton" @click="showDialogFunc(1)">1€</button>
        <button class="moneyButton" @click="showDialogFunc(2)">2€</button>
        <button class="moneyButton" @click="showDialogFunc(5)">5€</button>
        <button class="moneyButton" @click="showDialogFunc(10)">10€</button>
      </div>

      <div class="textfieldwrapper">
          <label class="label">Eigenen Betrag</label>
          <input class="textfield" v-model="amountInput" min="1" max="9999" type="number" name="number" placeholder="100€" />

      </div>
    <button type="submit" class="submitButton" @click="showDialogFunc(amountInput)" >Spenden</button>
</div>

  <dialog class="dialog" v-if="showDialog" open>
    <p>Wollen Sie wirklich {{amount}}€ spenden ?</p>
    <button class="dialogButton" @click="showDialog = false">Nein</button>
    <button class="dialogButton" @click="this.$router.push('/payment/success')">Ja</button>
  </dialog>

</template>

<script>
import ngoitemdetailed from '../components/NGOItemDetailed.vue'
import axios from 'axios'
export default {
  name: 'Payment',
  components: {
    ngoitemdetailed
  },
  methods: {
    showDialogFunc(number){

      this.amount = number
      this.showDialog = true
    }
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
      ngo: {},
      customAmount: false,
      showDialog: false,
      amount: 0,
      amountInput: 0,
    }
  }

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Jost');
.label{
  font-family: Jost;
  font-style: normal;
  font-size: 1rem;
}


.container{
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  grid-template-rows: 1fr auto 1fr;
  justify-content: center;
  justify-items: center;
  align-items: baseline;
  align-content: center;
  gap: 1rem;

}

.buttonwrapper{
  margin-top: 100px;
  justify-content: center;
  display: flex;
}


</style>
