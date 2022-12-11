<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Description</th>
        <th class="text-left">Bank Name</th>
        <th class="text-left">Initial Balance</th>
        <th class="text-left">Currency</th>
        <th class="text-left">Account Type</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in accounts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.bank_name }}</td>
        <td>{{ item.initial_balance }}</td>
        <td>{{ item.currency }}</td>
        <td>{{ item.account_type }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
  export default {
    data () {
      return {
        accounts: [
          {
            name: 'High Interest Saving Account',
            description: 'Hight Interest Saving Account',
            bank_name: 'RBC',
            initial_balance: 1000,
            currency: 'CAD',
            account_type: 'Saving Account'
          },
          {
            name: 'TFSA',
            description: 'Hight Interest Saving Account',
            bank_name: 'Scotia',
            initial_balance: 1000,
            currency: 'CAD',
            account_type: 'Saving Account'
          }
        ],
      }
    },
  }
</script>