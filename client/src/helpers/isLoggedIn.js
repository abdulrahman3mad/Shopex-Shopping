function isLoggedIn(){
    let user = JSON.parse(sessionStorage.getItem("user"));
    if(user && user.accessToken) return user
}

export default isLoggedIn;