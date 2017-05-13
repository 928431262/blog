/**
 * Created by Administrator on 2017/5/9.
 */
const mongoose = require('mongoose');
const setting = require('../setting');
const url = require('url')
//使promise库与ES6promise 一致
//说明我们使用的promise对象是ES6中原生的promise对象
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${setting.host}/${setting.db}`);
const DbSet ={
    //新增
    addOne:(obj,req,res,logMsg)=>{
        let newobj = new obj(req.body);
        newobj.save().then(result=>{
            res.end(logMsg);
        }).catch(err=>{
            res.end(err)
        })
    },
    //删除
    delOne:(obj,req,res,logMsg)=>{
        //用url模块处理req.url就能够获取get参数
        let params = url.parse(req.url,true);
        let targetId = params.query.id;
        obj.remove({_id:targetId}).then(result=>{
            res.end(logMsg);
        }).catch(err=>{
            res.end(err)
        })

    },
    //修改
    updateOne:(obj,req,res,logMsg)=>{
        let params = url.parse(req.url,true);
        let targetId = params.query.id;
        req.body.updateDate = new Date();
        let update = {$set:req.body};
        obj.update({_id:targetId},update).then(result=>{
            res.end(logMsg);
        }).catch(err=>{
            res.end(err);
        })
    },
    //查询
    findOne:(obj,req,res,logMsg)=>{
        let params = url.parse(req.url,true);
        let targetId = params.query.id;
        obj.findOne({_id:targetId}).then(result=>{
            res.json(result);
        }).catch(err=>{
            res.end(err);
        })
    },
    //查询所有的
    findAll:(obj,req,res,logMsg)=>{
        obj.find({}).then(result=>{
            res.json(result);
        }).catch(err=>{
            res.end(err);
        })
    }
}
module.exports = DbSet