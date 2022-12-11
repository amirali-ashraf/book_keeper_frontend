<template>
  <div>
    <ModalDialogComponent></ModalDialogComponent>
  </div>
</template>
<script>

import ModalDialogComponent from '../modal_components/ModalDialogComponent.vue';

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjY4OTIzOTQ1LCJleHAiOjE2Njg5Mjc1NDUsImp0aSI6IjcxZmQ5OTkwLTA1YWQtNDdhYy1hZjc4LWZmMmRiMDYyMGMxOSJ9.ZqYPEFOZb-hfYDsEcuTD0uAI7xIU1OazMzHKlj4sCKQ");

export default {
  components: {
    ModalDialogComponent
  },
  data() {
    return {

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