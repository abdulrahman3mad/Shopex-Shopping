export default function checkExpiredUser(){
    let user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user.accessToken)
    return Object.keys(user).length > 0 && user.accessToken
}