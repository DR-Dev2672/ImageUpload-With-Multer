const express=require("express");
const app=express();
const path =require("path")
const multer=require("multer")

// const upload = multer({ dest: 'uploads/' })
app.use(express.urlencoded({extended:false}))

const PORT=8001;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null,`${Date.now()}-${file.originalname}`)
    }
  })

  const upload = multer({ storage: storage })



app.listen(PORT,(req,res)=>{
    console.log("server is ready")
})
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))




app.get("/",(req,res)=>{
    return res.render("homepage")
})

app.post("/upload",upload.single('profileImage'),(req,res)=>{
  console.log(req.body)
  console.log(req.file)
  return res.redirect("/")
})




