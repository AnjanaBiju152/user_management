class UserManagement {
    dataBase = {
        anjana: { username: 'milan', email: 'anjana@gmail.com', password: 'm123' },
        john: { username: 'john', email: 'john@gmail.com', password: 'j123' },
        mary: { username: 'mary', email: 'mary@gmail.com', password: 'ma123' }
    }
    saveData() {
        localStorage.setItem("userData", JSON.stringify(this.dataBase))
    }
    getData() {
        this.dataBase = JSON.parse(localStorage.getItem("userData"))
    }
    login() {
        this.getData()
    }
    register() {
        this.getData()
    }
}


