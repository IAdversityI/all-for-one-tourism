

function checkNull2(input) {
    if (input.length == 0) {
        return false;
    } else {
        return true
    }
}

function setToken(Token) {
    localStorage.setItem('token', Token)
    // return Token;
    // alert(Token)
//                    console.log(token)
//     var token = localStorage.getItem("token");
//     console.log(token)
}

function getToken() {
    var token = localStorage.getItem("token");
    return token;
    // console.log(token)
}