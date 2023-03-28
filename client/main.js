const complimentBtn = document.getElementById("complimentButton")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    }); 
};



const fortuneBtn = document.getElementById("fortuneButton")
const getFortune = () => { 
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const animalButton = document.getElementById("animalButton")
const getAnimal = () => {
    axios.get("http://localhost:4000/api/animal/")
    .then(res => {
        const data = res.data;
        alert(data);
    }); 
};

const swearButton = document.getElementById("swearButton")
const getSwear = () => {
    axios.get("http://localhost:4000/api/swear/")
    .then(res => {
        const data = res.data;
        alert(data);
    }); 
};

const toDoBtn = document.getElementById("toDoButton")
const getList = () => { 
    axios.get("http://localhost:4000/api/todo/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const addBtn = document.getElementById("formAdd")
const addToDo = () => { 
    axios.put("http://localhost:4000/api/todo:description/", addBtn)
    .then(res => {
        const data = res.data;
        alert(toDoList);
    })
};

const removeBtn = document.getElementById("formRemove")
const removeToDo = () => { 
    axios.put("http://localhost:4000/api/todo:description/", removeBtn)
    .then(res => {
        const data = res.data;
        alert(toDoList);
    })
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
animalButton.addEventListener('click', getAnimal);
swearButton.addEventListener('click', getSwear)
toDoBtn.addEventListener('click', getList);
addBtn.addEventListener('submit', getList);
removeBtn.addEventListener('submit', getList)

