const { createApp } = Vue

createApp({
  data() {
    return {
      arrayMail: [],
    }
  },
  methods: {
    randomMail() {
      for (let i = 0; i < 9; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
          this.arrayMail = result.data
          console.log(this.arrayMail.response)
        })
      }
    }
  },
  mounted() {
    this.randomMail()
  }
}).mount('#app')