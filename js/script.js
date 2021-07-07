Vue.config.devtools = true;



     const app = new Vue(
      {
          el: "#app",

          data: {

                  jobs: [

                        {
                              id: 1,
                              company: 'Perferendis',
                              position: 'Developer',
                              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                              created_at: '5/22/2021',
                              logo: 'logo.jpg',
                              city: 'Roma',
                              contract: 'Full Time'

                        },

                        {
                              id: 2,
                              company: 'Perferendis',
                              position: 'Analyst',
                              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                              created_at: '5/22/2021',
                              logo: 'logo.jpg',
                              city: 'Roma',
                              contract: 'Full Time'


                        },
                        {
                              id: 3,
                              company: 'Perferendis',
                              position: 'Developer',
                              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                              created_at: '5/22/2021',
                              logo: 'logo.jpg',
                              city: 'Roma',
                              contract: 'Full Time'

                        },

                        {
                              id: 4,
                              company: 'Perferendis',
                              position: 'Software Designer',
                              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                              created_at: '5/22/2021',
                              logo: 'logo.jpg',
                              city: 'Roma',
                              contract: 'Full Time'

                        },

                        {
                              id: 5,
                              company: 'Cows and Pigs',
                              position: 'Butcher',
                              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                              created_at: '5/22/2021',
                              logo: 'logo.jpg',
                              city: 'Roma',
                              contract: 'Full Time'

                        },

                        {
                              id: 6,
                              company: 'Perferendis',
                              position: 'Web Designer',
                              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                              created_at: '5/22/2021',
                              logo: 'logo.jpg',
                              city: 'Roma',
                              contract: 'Full Time'

                        },

                        {
                              id: 7,
                              company: 'Profundis',
                              position: 'Miner',
                              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                              created_at: '5/22/2021',
                              logo: 'logo.jpg',
                              city: 'Roma',
                              contract: 'Full Time'

                        },

                        

                  ],

                  starred: [ 1, 2, 3],
                  appllied: [ 4, 5]


                  
                  
                  
            },
                
            methods : {

                  //logo dinamico - funzione (!!!TODO la cartella è vuota)
                  pathLogo: function (avg) {
                        return "./img/"+ adv.logo ;
                  },

                  //funzione per push a starred specifica solo id percorso
                  addToStarred: function (index){
                        this.starred.push(this.jobs[index].id)
                        console.log(this.starred)
                  },

                  //funzione per push appllied - specifica solo id percorso
                  //applicare un button - TODO gestione visibilità - badge 
                  //gestione if -> collegare button
                  //se NON incluso PUSH -> 
                  addToAppllied: function (index){
                        if(!this.appllied.includes(this.jobs[index].id)){
                              this.appllied.push(this.jobs[index].id);
                        }

                        console.log(this.appllied)
                  },

                  //funzione badge - 


                  //funzione assegnazione star ?sfuttare la classe, come?
                  advInStarred: function (index){
                        if (this.starred.includes(index + 1)){
                        return "fas fa-star";
                  } else {
                        return "far fa-star";
                  }
                   },


                  


            },
           
      
            
      
      
      })
      
      
      
      
      
      












