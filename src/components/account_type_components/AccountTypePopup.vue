<template>
  <div>
    <LargePopup class="bg-surface-variant" button-name="Account Types" title="Account Types">
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <AccountTypeForm></AccountTypeForm>
          </v-col>
          <v-col cols="12" sm="8">
            <AccountTypeList></AccountTypeList>
          </v-col>
        </v-row>
      </v-container>
    </LargePopup>
  </div>
</template>

<script>
import LargePopup from "@/components/common_components/LargePopup.vue";
import AccountTypeList from "@/components/account_type_components/AccountTypeList.vue";
import AccountTypeForm from "@/components/account_type_components/AccountTypeForm.vue";

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjY4OTIzOTQ1LCJleHAiOjE2Njg5Mjc1NDUsImp0aSI6IjcxZmQ5OTkwLTA1YWQtNDdhYy1hZjc4LWZmMmRiMDYyMGMxOSJ9.ZqYPEFOZb-hfYDsEcuTD0uAI7xIU1OazMzHKlj4sCKQ"
);

export default {
  components: {
    LargePopup,
    AccountTypeList,
    AccountTypeForm,
  },
  data() {
    return {};
  },
  methods: {
    async createAccountType() {
      var raw = JSON.stringify({
        account_type: {
          name: this.accountTypeName,
          description: this.accountTypeDescription,
          currency: "123",
        },
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("localhost:3000/account_types", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    },
  },
};
</script>
<style lang="">
</style>