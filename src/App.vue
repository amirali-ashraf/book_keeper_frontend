<template>
  <ApplicationNavbar></ApplicationNavbar>
  <router-view id="content" />
</template>

<script>
import ApplicationNavbar from '@/components/common_components/ApplicationNavbar.vue'

export default {
  components: {
    ApplicationNavbar
  }
}
</script>


<style>
/* CUSTOM STYLE */

</style>