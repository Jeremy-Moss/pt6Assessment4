module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
    
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
    
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You will find the sock that you have been missing", "That plant that you have that has been dying will spring back to life.", "Your Javascript skills will get much more stellar very soon", "A large amount of money is coming your way", "This will be your best year ever"];
    
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
    
        res.status(200).send(randomFortune);
    },
    
    getAnimal: (req, res) => {
        const animals = ["Paradoxical Frog", "Screaming Hairy Armadillo", "Pleasing Fungus Beetle", "Raspberry Crazy Ant", "Sarcastic Fringehead"];
    
        let randomIndex = Math.floor(Math.random() * animals.length);
        let randomAnimal = animals[randomIndex];
    
        res.status(200).send(randomAnimal);
    },

    getSwear: (req, res) => {
        const animals = ["Balderdash!", "Son of a monkey!", "Mother fathers!", "What the cuss?", "Oh, ship!"];
    
        let randomIndex = Math.floor(Math.random() * animals.length);
        let randomAnimal = animals[randomIndex];
    
        res.status(200).send(randomAnimal);
    },
    getList: (req, res) => {
    let listString = "";
    const toDoList = [
        {
        id: 1, 
        description: "Sell poncho"},
        {
        id: 2, 
        description: "Grocery shopping"},
        {
        id: 3,
        description: "Wash car"}, 
    ];
    toDoList.forEach((el) => {
        listString +=  el.description + ", "
    
    });

    res.status(200).send(listString);
    },

    add: (req, res) => {
        toDoList.push();
    res.status(200).send(toDoList)
    },

    remove: (req, res) => {
        toDoList.delete();
    res.status(200).send(toDoList)
    }
    }