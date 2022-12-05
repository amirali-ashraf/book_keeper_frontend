<template lang="en">
  <!-- <v-dialog transition="dialog-bottom-transition">
    <template v-slot:activator="{ props }">
      <v-btn
        color="primary"
        v-bind="props"
      >Create Account Type</v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-toolbar color="primary" title="Opening from the bottom"></v-toolbar>
        <v-card-text>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field v-model="accountTypeName" label="Name" :counter="10" required>
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field v-model="accountTypeDescription" label="Descriptioin" :counter="10" required>
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-combobox v-model="accountTypeCurrency" label="accountTypeCurrency" :items="['USD', 'CAD', 'EUR', 'IRR']">
                  </v-combobox>
                </v-col>
              </v-row>
              <v-row>
                <v-btn
                  color="success"
                  class="mr-4"
                  @click="createAccountType"
                >
                  Submit
                </v-btn>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog> -->

</template>
<script>

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjY4OTIzOTQ1LCJleHAiOjE2Njg5Mjc1NDUsImp0aSI6IjcxZmQ5OTkwLTA1YWQtNDdhYy1hZjc4LWZmMmRiMDYyMGMxOSJ9.ZqYPEFOZb-hfYDsEcuTD0uAI7xIU1OazMzHKlj4sCKQ");

export default {
  data() {
    return {
      accountTypeName: null,
      accountTypeDescription: null,
      accountTypeCurrency: null,
      accountTypeCurrencies: []
    }
  },
  methods: {
    async createAccountType() {
      var raw = JSON.stringify({
        "account_type": {
          "name": this.accountTypeName,
          "description": this.accountTypeDescription,
          "currency": "123"
        }
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("localhost:3000/account_types", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  }
}
</script>
<style lang="">

</style>