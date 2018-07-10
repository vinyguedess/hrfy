if (process.env.NODE_ENV="development")
{
    require("babel-register")();
    const { app } = require("./src");
    app.listen(3000);
}
else 
{
    const { app } = require("./app");
    app.listen(3000);
}