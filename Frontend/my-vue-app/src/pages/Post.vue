<template>
  <label>
    <textarea class="textarea" @input="countChar" maxlength="280" placeholder="Text">
    </textarea>

  </label>
  <div style="margin-bottom: 10px">
    <span id="current">0 </span>
    <span id="maximum">/ 280</span>
  </div>

  <label for="file-upload" class="custom-file-upload">
   Bild / Video hochladen
  </label>
  <input id="file-upload" type="file" accept="image/gif,image/png,image/jpeg,image/webp" multiple onchange="loadFile(event)">
  <img id="output" />
</template>

<script>
var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }
};

export default {

  name: "Post",
  methods: {
    countChar() {
      const textarea = document.querySelector("textarea");

      textarea.addEventListener("input", ({currentTarget: target}) => {
        const maxLength = target.getAttribute("maxlength");
        const currentLength = target.value.length;

        document.getElementById('current').innerText = currentLength;

      });
    },


  }
}




</script>

<style scoped>

</style>