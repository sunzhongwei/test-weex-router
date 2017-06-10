<template>
  <div class="wrapper">
    <text class="title" @click="jump">Back to Home</text>
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { padding-top:40px; padding-bottom: 40px; font-size: 48px; }
</style>

<script>
  export default {
    data: {
    },
    methods: {
      jump: function (e) {
	console.log("back to Home");
	this.$router.push('/index');
      }
    }
  }
</script>
