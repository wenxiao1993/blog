// 加载模块
const path = require('path')
const cors = require('cors')
const express = require('express')
const app = express()
app.listen(80, () => console.log('大事件项目启动'))

// 配置应用级别中间件
app.use(cors())
app.use(express.urlencoded({ extended: false }))
// 加载路由模块
app.use('/api', require(path.join(__dirname, 'routers', 'login')))
app.use('/my/article', require(path.join(__dirname, 'routers', 'category')))
app.use('/my/article', require(path.join(__dirname, 'routers', 'article')))
app.use('/my', require(path.join(__dirname, 'routers', 'user')))