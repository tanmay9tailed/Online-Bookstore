let url = ""
if(import.meta.env.PROD){
    url = "https://online-bookstore-c6mt.vercel.app"
}else{
    url = "http://localhost:3000"
}

export default url