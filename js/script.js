/*

Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

** Bonus **
1. Far comparire gli indirizzi email solamente quando sono stati tutti generati.
2. Predisporre una scritta “Errore” nel caso fallisse la chiamata HTTP

Consigli:
Iniziate a testare una chiamata axios direttamente da mounted.
Analizzate bene i dati in arrivo.
Solo in un secondo momento predisponete la logica delle 10 chiamate

*/

const app = new Vue({

  el: '#app',

  data: {

    randomMail: ''

  },

  method: {

  },

  mounted(){

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((response) => {
      
      console.log('response --->',response);
      console.log('response.data --->',response.data);

      const data = response.data;
      console.log('const data --->',data);

      console.log('data.response --->',data.response);
      
      this.randomMail = data.response;
      console.log('const randomMail --->',this.randomMail);
      
    })
    .catch(() => {

    })

  }

})