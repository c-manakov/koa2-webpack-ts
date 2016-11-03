
import * as Koa from "koa"
const app = new Koa()

// response
app.use( async (ctx : Koa.Context) => {
    ctx.response.status = 200
    ctx.body = "Hello Koa!"
})

app.listen(3000)