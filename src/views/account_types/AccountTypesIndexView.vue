<template lang="">
  <div>
    <CreateModalComponent />
    <v-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Desc.</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.description}}</td>
          <td>{{item.currency}}</td>
          <td>
            <v-btn append-icon="mdi-trash-can" variant="tonal" @click="deleteAccountType(item.id)">
              Delete
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<script>
import CreateModalComponent from '../../components/account_types_components/CreateModalComponent.vue'


var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjY4OTI3ODI1LCJleHAiOjE2Njg5MzE0MjUsImp0aSI6IjVhMGFmMGI2LTNiMWQtNDg0Ny05NGE0LTQ2OWY1MjVlNmY0YSJ9.6DR4qhIRXb8fJlRU98glAZhofy9EVE4NmVJdg3Qy7Pk");



export default {
  components: {
    CreateModalComponent: CreateModalComponent
  },
  data() {
    return {
      items: [],
      valid: false,
      accountTypeName: null,
    }
  },
  methods: {
    async getAccountTypes() {
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      var vm = this;
      return await fetch("http://localhost:3000/account_types", requestOptions)
        .then(response => response.json())
        .then(result => { vm.items = result })
        .catch(error => console.log('error', error));
    },
    async deleteAccountType(accountTypeId) {
      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };

      var vm = this;

      await fetch(`http://localhost:3000/account_types/${accountTypeId}`, requestOptions)
        .then(response => response.text())
        .then(result => {vm.getAccountTypes(); return result;})
        .catch(error => console.log('error', error));
    },
  },
  async mounted() {
    await this.getAccountTypes();
  }
}
</script>
<style lang="">

</style>