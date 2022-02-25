let userDisplay = {

  template: `
  <div>
  
  <div >
    
  
    
    
  </div>


  
  </div>
  
  `,
  props: ["users", "userfocused"]

}

let vm = new Vue({

  el: '#app',

  data: {

    users: [],
    userfocused: 0

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

      let response = await fetch('https://jsonplaceholder.typicode.com/users/' + this.userfocused)
      this.user = await response.json()



    },

  },
  components: {

    "user-display": userDisplay
  }






})