let userDisplay = {

  template: `
  <div>
  
  <div v-if="user.id">
    
  <h1> {{user.name}}({{user.username}})</h1>
   <p>Id: n°{{user.id}}</p>
   <ul>
      <li>email: {{user.email}}</li>
      <li>Tel: {{user.phone}}</li>
      <li>Site: {{user.website}}</li>
   
   </ul>
   <p> Adresse: {{user.address.street}}, {{user.address.suite}} {{user.address.city}}  {{user.address.zipcode}} </p>
   <p> Entreprise: {{user.company.name}}</p>
   
   <input v-on:click="displayTask" type="submit" value="Voir les tâches">
   
    
  </div>


  
  </div>
  
  `,
  props: ["users", "userfocused","user", "task", "taskactive"],

  data: function () {

    return {

      



    }

    
  }

}

let vm = new Vue({

  el: '#app',

  data: {
    user: [],
    users: [],
    userfocused: 0,
    task:[],
    taskactive: false

  },
  created: function () {

    this.loadUsers()

  },

  methods: {
    
     loadUsers: function () {

      fetch('https:jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          console.log(users)
          this.users = users
        })
        .catch(e => {
          console.error('ERREUR', e)
        })

    },
    

    displayUserData: async function () {

      if (this.userfocused != 0) {

      let response = await fetch('https://jsonplaceholder.typicode.com/users/' + this.userfocused)
      let user = this.user = await response.json()
      console.log(user)
    }
    else this.user = []
      
      




    },

  },
  components: {

    "user-display": userDisplay
  }






})