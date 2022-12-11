<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="accountTypeName"
            label="Name"
            :counter="10"
            required
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="accountTypeDescription"
            label="Descriptioin"
            :counter="10"
            required
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-combobox
            v-model="accountTypeCurrency"
            label="accountTypeCurrency"
            :items="['USD', 'CAD', 'EUR', 'IRR']"
          >
          </v-combobox>
        </v-col>
      </v-row>
      <v-row>
        <v-btn color="success" class="mr-4" @click="createAccountType">
          Submit
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      accountTypeName: null,
      accountTypeDescription: null,
      accountTypeCurrency: null,
    }
  }
}
</script>