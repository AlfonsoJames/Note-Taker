
const express = require("express");
const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// require("./routes/apiRoutes")(app);
require("./routes")(app);

app.listen(PORT, () => console.log(`App listening on PORT http://localhost:${PORT}`));