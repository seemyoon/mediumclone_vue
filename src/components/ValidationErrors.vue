<script>
export default {
  name: 'McvValidationError',
  props: {
    validationErrors: {
      type: Object,
      required: true // important to pass component
    }
  },
  computed: {
    errorMessages(){
      return Object.keys(this.validationErrors).map(name=>{
        const messages = this.validationErrors[name].join(', ')
        return `${name} ${messages} `
      })
    }
  }
}

</script>

<template>
  <ul class="error-messages">
    <li v-for="errorMessage in errorMessages" :key="errorMessage">{{ errorMessage}}</li>
  </ul>
</template>

<style scoped>

</style>