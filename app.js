const app = Vue.createApp({
    data() {
        return {
            contacts: [
                {firstName: 'Bob', lastName: 'Smith', email: 'bob@bob.com', phone: 12345678},
                {firstName: 'Jane', lastName: 'Doe', email: 'jane@jane.com', phone: 22222222},
                {firstName: 'John', lastName: 'Doe', email: 'john@gmail.com', phone: 22223333},
                {firstName: 'Alex', lastName: 'Hunt', email: 'alex@gmail.com', phone: 98234821},
                {firstName: 'Mary', lastName: 'Plunket', email: 'mary@plunket.com', phone: 22223333}
              ],
            filterInput: "",
            filterTable: "",
            openAddContact: false,
            newFName: "",
            newLName: "",
            newEmail: "",
            newNumber: ""
        }
    },
    methods: {
        clearText() {
            this.filterInput = "";
            this.applyFilter();
        },
        applyFilter() {
            this.filterTable = this.filterInput
        },
        sortBy(prop){
            this.contacts.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
        },
        showModal() {
            this.openAddContact = true
        },
        addContact() {
            if (this.newFName == "" || this.newLName == "" || this.newEmail == "" || this.newNumber == ""){
                alert("Please fill in fields")
            }
            else {
                this.contacts.push({firstName: this.newFName, lastName: this.newLName, email: this.newEmail, phone: this.newNumber})
                this.openAddContact = false
                this.newFName = "",
                this.newLName = "",
                this.newEmail = "",
                this.newNumber = ""
            }
        }
    },
    computed: {
        filteredContacts: function(){
            return this.contacts.filter((contact) => {
                return contact.lastName.toLowerCase().match(this.filterTable.toLowerCase())
            })
        }
    }
})

app.mount('#app')