const { createApp } = Vue

  createApp({
    data() {
      return {
        
      }
    },
    methods: {

    },
    mounted() {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function (result){
        const resultData = result.data
        console.log(resultData.response)
      })
    }
  }).mount('#app')