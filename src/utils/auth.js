function setToken(token){
    sessionStorage.setItem("token",token)
}
function getToken(){
    return sessionStorage.getItem("token")
}
function removeToken(){
    sessionStorage.removeItem("token")
}
export {setToken,getToken,removeToken}