// const { createApp } = Vue

// createApp({
//   data() {
//     return {
//       arrayMail: [],
//     }
//   },
//   methods: {
//     randomMail() {
//       for (let i = 0; i < 10; i++) {
//         axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
//           this.arrayMail.push(result.data.response)
//           console.log(this.arrayMail[i])
//         })
//       }
//     }
//   },
//   mounted() {
//     this.randomMail()
//   }
// }).mount('#app')

//               PER BONUS 2 CON INPUT CHE SCEGLIE QUANTE MAIL GENERARE
const { createApp } = Vue

createApp({
  data() {
    return {
      arrayMail: [],
      userInput: "",
      title: "Genera il numero di mail che vuoi",
      numberInput: "",
    }
  },
  methods: {

    randomMail() {
      this.numberInput = this.userInput;
      this.arrayMail = [];
      //SE IL NUMERO DELL'UTENTE E MINORE DI 5 STAMPO IN PAGINA UN ALERT
      if (this.numberInput < 5 || this.numberInput > 250) {
        alert("Errore, si devono generare tra 5 e 250 mail!");
      }
      //SENNò STAMPO LE MAIL TRAMITE CHIAMATA AXIOS
      else {
        for (let i = 0; i < this.numberInput; i++) {
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            this.arrayMail.push(result.data.response)
            console.log(this.arrayMail[i])
          })
        }
      }
    }
  },
  mounted() {
    // this.randomMail()
  }
}).mount('#app')