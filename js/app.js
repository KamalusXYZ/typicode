let vm = new Vue({
  /*Création d'une instance de vue, et passage du code en option*/
  el: '#app',
  /*Sélecteur. Même syntaxe que le CSS*/
  data: {
    /*Données de l'application*/

    users: []

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

    }
  }






})