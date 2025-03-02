const mongoose=require('mongoose')

const userschema=mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
})

module.export=mongoose.model('User',Userschema)