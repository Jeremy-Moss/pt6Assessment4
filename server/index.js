const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const { getCompliment } = require('./controller')
app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')
app.get("/api/fortune", getFortune);

const { getAnimal } = require('./controller')
app.get("/api/animal", getAnimal);

const { getSwear } = require('./controller')
app.get("/api/swear", getSwear);

const { getList } = require('./controller')
app.get("/api/todo", getList);

const { add } = require('./controller')
app.put("api/todo:description", add);

const { remove } = require('./controller')
app.delete("api/todo:description", remove);

app.listen(4000, () => console.log("Server running on 4000"));
