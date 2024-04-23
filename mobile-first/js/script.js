// const dt = luxon.DateTime;
// console.log(luxon.DateTime.now())
const { createApp } = Vue;


createApp({
  data() {
    return {
      indexToClick: 0,
      newMessageToSent: '',
      isSend: false,
      newMessageToReceived: '',
      seach: '',
      hoverTootips: false,
      lastDateUser: '',
      contacts: [
        {
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "_4",

          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "_5",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "_6",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "_7",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "_8",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  created() {},
  methods: {
    addMessege: function() {
      if (this.newMessageToSent !== '') {
        this.contacts[this.indexToClick].messages.push({
          date: '',
          message: this.newMessageToSent,
          status: "sent",
        });
        this.newMessageToSent = '';
        isSend = true;
  
        this.mesReceive()
      }
    },
    mesReceive: function() {
        const risposteWhatsApp = [
          "Va bene!",
          "Capito.",
          "Certo!",
          "Okay.",
          "Grazie!",
          "Perfetto!",
          "Interessante.",
          "Che bello!",
          "Bello sentire quello!",
          "Fantastico!",
          "Beh, allora cosa facciamo?",
          "Non vedo l'ora!",
          "Ne parleremo più tardi.",
          "È così?",
          "Molto interessante!",
          "Davvero?",
          "Mi piace!",
          "Giusto.",
          "Bene, parliamone.",
          "Che bella notizia!"
      ];

      const numRand = this.getRndInteger(1, 20);

      this.newMessageToReceived = risposteWhatsApp[numRand];
      console.log(this.newMessageToReceived)
    
      if (isSend) {
        setTimeout(() => {
          this.contacts[this.indexToClick].messages.push(
            {
              date: "",
              message: this.newMessageToReceived,
              status: "received",
            }
          )
          isSend = false
        }, 1000)
      }
    },
    seachChat: function() {
      this.contacts.forEach((curChat) => {
        const name = curChat.name.toLowerCase()
        if(!name.includes(this.seach)) {
             curChat.visible = false;
        } else {
          curChat.visible = true
        }
     });
    },
    showHover: function() {
      this.hoverTootips = !this.hoverTootips
    },
    cancelMes: function(indexMesCancel) {
      if(indexMesCancel <= this.contacts[this.indexToClick].messages.length -1) {
        this.contacts[this.indexToClick].messages.splice(indexMesCancel, 1)
      } else {
        this.contacts[this.indexToClick].messages = [];
      }
    },
    // showLastMes: function(curContact) {
    //   if (curContact.messages.length !== 0) {
    //     curContact.messages[curContact.messages.length - 1].message
    //   } else {
    //     return 'ciao'
    //   }
    // },
    showLastDateUser: function(messagesToClicle) {
      messagesToClicle.forEach((curMes, index) => {
        if (curMes.status === 'received') {
          this.lastDateUser = curMes.date;
        }
      })
      return this.lastDateUser
    },
    getRndInteger: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
  },
}).mount("#app");



