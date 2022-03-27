<template>
  <div class="wrapperDetailed" >
  <div class="itemDetailed" >
    <img src="../assets/wwf.jpg" alt="" class="ngologo">
    <span class="ngoname">{{name}}
    </span>
  </div>
  <div class="detailedDetails">
  <p class="detailedDetail">{{description}}</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ngoitemdetailed',
  props: {
    logo: String,
    name: String,
    description: String,
    shortDescription: String,
    website: String,
    id: String
  }
}

</script>

<style scoped>


</style>
