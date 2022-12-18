function isLoggedIn(){
    let user = JSON.parse(localStorage.getItem("user"));
    if(user && user.user) return user.user
}

export default isLoggedIn;