module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
    
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
    
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You will find the sock that you have been missing", "That plant that you have that has been dying will spring back to life.", "Your Javascript skills will get much more stellar very soon", "A large amount of money is coming your way", "This will be your best year ever"];
    
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
    
        res.status(200).send(randomFortune);
    }
}