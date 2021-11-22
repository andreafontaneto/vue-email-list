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

    randomMail: '',
    mailArray: [],
    isLoading: true,
    httpError: false

  },

  method: {


  },

  mounted(){

    this.isLoading = true;
    this.mailArray = [];
    this.httpError= false;

    for(let i = 0; i < 10; i++){
  
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((response) => {
  
        //console.log('response --->',response);
        //console.log('response.data --->',response.data);
  
        const data = response.data;
        //console.log('const data --->',data);
  
        //console.log('data.response --->',data.response);
        
        this.randomMail = data.response;
        console.log('const randomMail --->',this.randomMail);
  
        this.mailArray.push(this.randomMail);
  
        if(this.mailArray.length === 10){
          this.isLoading = false;
        }
        
      })

      .catch((error) => {

        console.log('error --->',error);
        this.httpError = true;

        if(this.httpError === true){
          this.isLoading = false;
        }
  
      })
      
    }
  
    //console.log('array con le email --->',this.mailArray);

  }

})