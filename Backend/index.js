//import koa
const Koa = require("koa");

//app start
const app = new Koa();

app.use((ctx) => {
  ctx.body = "Welcome to Koa";
});

app.listen(3005, () => {
  console.log("app running on port 3005");
});
