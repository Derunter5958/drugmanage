
const Koa = require('koa') // 引入koa
const Router = require('koa-router') // 引入koa-router
const serve = require('koa-static')//koa获得静态内容
const path = require('path')
const cors = require('koa2-cors')//解决跨域问题
const multer = require('@koa/multer')//图片上传的插件
const app =new Koa()
const router =new Router()
app.use(serve(path.join(__dirname, './upload')))
app.use(cors())//注意这个配置要在router前使用不然不生效
app.use(router.routes())
    .use(router.allowedMethods())
const storage = multer.diskStorage({

    destination: function (req:any, file:any, cb:any) {
        cb(null, './upload')
    },

    filename: function (req:any, file:any, cb:any) {
        const fileFormat = (file.originalname).split('.');
        console.log(fileFormat)
        cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1]);  
                //  当前的时间：毫秒计算

    }
})
const upload = multer({ storage })
router.get('/', async (ctx:any) => {
    ctx.type = 'html'
    ctx.body = '<h1>hello world!</h1>'
})
//单文件上传中间件挂载到路由上
//note:需要注意的是upload.single('file'),中的file需要和上方的index.html中的formData字段一致，这个字段前后端必须一致
router.post('/upload', upload.single('file'), async (ctx:any) => {
    console.log('ctx.request.body', ctx.request.body)
    ctx.body = 'done'
})
// 启动服务监听本地3000端口
app.listen(3000, () => {
    console.log('应用已经启动，http://localhost:3000')
})
