/**
 * Created by Administrator on 2017/5/9.
 */
const mongoose = require('mongoose')
//创建模型
const  kittySchema = mongoose.Schema({
    name:string
})
//将这个模型应用到集合里面去
const kitty = new Schema('kitty',kittySchema);

//创建一个白色的猫
var whiteCat = new kitty({name:'whiteCat'});
//增加一个公共的方法
kittySchema.methods.speak = ()=>{
    console.log(this.name)
}