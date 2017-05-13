/**
 * Created by Administrator on 2017/5/9.
 */
//首页的所有请求都写在这
//暴露出来

exports.index = (req,res,next)=>{
   res.render('index',{
       title:'我的首页',
       layout:'/views/template'
   })
}
exports.reg = (req,res,next)=>{
    res.render('reg',{
        title:'注册',
        layout:'/views/template',


    })
}
exports.login = (req,res,next)=>{
    res.render('login',{
        title:'登录',
        layout:'/views/template'
    })
}
exports.find = (req,res,next)=>{
    res.render('find',{
        title:'发现',
        layout:'/views/template'
    })
}
exports.aboutme = (req,res,next)=>{
    res.render('aboutme',{
        title:'关于我',
    layout:'/views/template'
    })
}
exports.tuijian = (req,res,next)=>{
    res.render('tuijian',{
        title:'推荐',
        layout:'/views/template'
    })

}
exports.remen = (req,res,next)=>{
    res.render('remen',{
        title:"热门",
        layout:'/views/template'
    })
}
exports.dengdai = (req,res,next)=>{
    res.render('dengdai',{
        title:'等待',
        layout:'/views/template'
    })
}
exports.huati = (req,res,next)=>{
    res.render('huati',{
        title:'话题',
        layout:'/views/template'
    })
}