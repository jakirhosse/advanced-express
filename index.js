import connectWithDB from "./mongo.js";  // Check if `mongo.js` is in the correct path
import configure from "./Controler/UserControler.js"; // Ensure this path is correct
import handlerror from "./middlewear/handleError.js";
import express from "express";

const app = express();
const port = 5000;

app.use(express.json());

connectWithDB();
configure(app);
app.use(handlerror);

app.listen(port, () => {
    console.log("Server running on port " + port);
});
