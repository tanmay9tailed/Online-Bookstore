let url = ""
if(import.meta.env.PROD){
    url = "https://online-bookstore-backend-olive.vercel.app"
}else{
    url = "http://localhost:3000"
}

export default url