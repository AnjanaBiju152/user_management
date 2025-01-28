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
        var loggedupassword = userpassword.value;
        var loggeduname = username.value;
        if (loggeduname !== '' && loggedupassword !== '') {
            if (loggeduname in this.dataBase) {
                if (this.dataBase[loggeduname].password===loggedupassword) {
                    localStorage.setItem("loggeduname", loggeduname)
                    window.location="home.html"
                    
                }
                else {
                    alert("password not matching")
                }
            }
        }
        else {
            alert("please fill form completely")
        }
    }
    register() {

        let uname = username.value;
        let uemail = useremail.value;
        let upassword = userpassword.value;
        if (uname !== '' && uemail !== '' && upassword !== '') {
            console.log("username", uname, uemail, upassword);
            this.getData()//add item to localstorage
            if (uname in this.dataBase) { //check name is in local storage
                alert(`${uname} already exist in db`)
            }
            else {
                this.dataBase[uname] = { username: uname, email: uemail, password: upassword }
                this.saveData();
                alert(`${uname} successfully registered`)
                window.location = "login.html" //redirect to the loginpage after registration is successful
            }
        }

        else {
            alert("please fill the form completely")
        }
    }
}

const obj = new UserManagement();
obj.saveData()


