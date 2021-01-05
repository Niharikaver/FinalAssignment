const app = require("./app");
const port = process.env.PORT || 8082;
app.listen(port, (err) => {
  if (err) {
    return console.log("ERROR: ", err);
  }
  console.log(`Listening at port: ${port}`);
});
