<template lang="en">
  <v-dialog transition="dialog-bottom-transition">
    <ModalHeaderComponent></ModalHeaderComponent>
    <ModalBodyComponent></ModalBodyComponent>
  </v-dialog>
</template>

<script>

import ModalHeaderComponent from './ModalHeaderComponent.vue';
import ModalBodyComponent from './ModalBodyComponent.vue';

export default {
  components: {
    ModalBodyComponent,
    ModalHeaderComponent
  }
}

</script>