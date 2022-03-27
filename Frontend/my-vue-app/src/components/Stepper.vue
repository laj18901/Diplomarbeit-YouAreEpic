<template>
  <ul class="stepper">
    <li id="first"  class="stepper__item">Interessen</li>
    <li id="second" class="stepper__item">NGOs</li>
    <li id="third"  class="stepper__item">Bezahlen</li>
    <li id="fourth" class="stepper__item">Post</li>
  </ul>
</template>

<script>
export default {
name: "Stepper",

  created() {
  let currentStep = this.$route.meta.step
    switch (currentStep){
      case 1:
        document.getElementById("#first").classList.add('current')
        break
      case 2:
        document.getElementById("#first").classList.add('complete')
        document.getElementById("#second").classList.add('current')
        break
      case 3:
        document.getElementById("#first").classList.add('complete')
        document.getElementById("#second").classList.add('complete')
        document.getElementById("#third").classList.add('current')
        break
    }
  }

}
</script>

<style scoped>

</style>