const express = require("express");
const app = express();

//Ruta principal - para q responda algo
app.get("/",(req, res)=> {
    res.send("Bck End Deploy !!!!")
});

// const PORT = 3000; //Puerto Manera local
// console.log(process.env.PORT);

const PORT = process.env.PORT || 3000;
// console.log(PORT);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

