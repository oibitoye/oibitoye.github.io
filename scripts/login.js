    //function to store user name and password
       function dbStore(theForm) {
        document.getElementById('welcomeMessage').innerHTML = "";
        var inputUsername = theForm["username"];
        var inputPassword = theForm["password"];
        localStorage.setItem("username", inputUsername.value);
        localStorage.setItem("password", inputPassword.value);
        document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
        return false;
       } // end store()

       
    //function to sign in
       function login(theForm) {
        document.getElementById('welcomeMessage').innerHTML = "";
        var inputUsername = theForm["username"];
        var inputPassword = theForm["password"];
        var username = inputUsername.value;
        var password = inputPassword.value;
        if ((username == localStorage.getItem('username')) && (password == localStorage.getItem('password'))) {
         document.getElementById('welcomeMessage').innerHTML = "Welcome to Andela Ikeji " + localStorage.getItem('username') + "!";
          } else {
         document.getElementById('welcomeMessage').innerHTML = "Invalid Log-in!";
        }
        return false;
       } // end login()