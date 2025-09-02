import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import User from './models/user.model.js';

const app = express();


app.use(express.json());

app.get('/',(req, res)=>{
     res.send("server listening...")
})


app.get('/api/users',async (req, res)=>{
      try{
          const users = await User.find()
      res.status(201).json(users)
      }catch(error){
          res.status(500).json({message : error.message})
      }

})

app.post("/api/users", async (req, res)=>{
     try{
      console.log("Incoming body:", req.body); 
      const userdata = await User.create(req.body);
      res.status(200).json(userdata)
     }
     catch(error){
     res.json({message: error.message})
     }
})

app.listen(8000, ()=>{
     console.log("running on http://localhost:8000/") 
}
)

mongoose.connect(process.env.MONGOURI)
.then(()=>{
     console.log("DB Connected!")
})
.catch(()=>{
     console.log("Connection Failed!")
})
