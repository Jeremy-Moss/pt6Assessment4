const complimentBtn = document.getElementById("complimentButton")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    }); 
};
complimentBtn.addEventListener('click', getCompliment);


const fortuneBtn = document.getElementById("fortuneButton")
const getFortune = () => { 
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
fortuneBtn.addEventListener('click', getFortune);


const toDoBtn = document.getElementById("toDoButton")
const getList = () => { 
    axios.get("http://localhost:4000/api/todo/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
toDoBtn.addEventListener('click', getList);


const addBtn = document.getElementById("addBtn")
const getList = ( => { 
    axios.put 
})