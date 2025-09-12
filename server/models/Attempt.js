const mongoose=require('mongoose');
const s=new mongoose.Schema({user:Object,drillId:mongoose.Schema.Types.ObjectId,answers:[String],score:Number,date:{type:Date,default:Date.now}});
module.exports=mongoose.model('Attempt',s);