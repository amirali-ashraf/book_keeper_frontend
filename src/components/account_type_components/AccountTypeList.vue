<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in account_types"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
  export default {
    data () {
      return {
        account_types: [
          {
            name: 'Saving Account',
            description: 'My Saving Accounts',
          },
          {
            name: 'Checking Account',
            description: 'My Checking Accounts',
          },
          {
            name: 'Cash',
            description: 'My Cash Asset',
          },
          {
            name: 'Credit',
            description: 'Credit Account',
          }
        ],
      }
    },
  }
</script>