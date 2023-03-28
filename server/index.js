const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const { getCompliment } = require('./controller')
app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')
app.get("/api/fortune", getFortune);

const { getList } = require('./controller')
app.get("/api/todo", getList);

const { addToDo } = require('./controller')
// app.put("api/addtodo", addToDo);


app.listen(4000, () => console.log("Server running on 4000"));
