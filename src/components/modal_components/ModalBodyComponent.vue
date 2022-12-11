<template v-slot:default="{ isActive }">
  <v-card>
    <v-toolbar color="primary" title="Opening from the bottom"></v-toolbar>
    <v-card-text>

    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      accountTypeName: null,
      accountTypeDescription: null,
      accountTypeCurrency: null,
      accountTypeCurrencies: []
    }
  }
}

</script>