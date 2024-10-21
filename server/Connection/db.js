const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE).then(res=>{
    console.log("Server connected to DB");
}).catch(err=>{
    console.log(err);
    
})