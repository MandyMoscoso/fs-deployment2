const quotes = [{id: 1,quote:"Wicked Spoon"},{id: 2,quote:"Bachanal"}, {id: 3,quote: "Ping Pang Pong"},{id: 4,quote: "Ichi Ramen"}, {id: 5,quote: "Chili's"}, {id: 6,quote: "Tea Maison"},{id: 7,quote: "KBBQ"}, {id: 8,quote: "Raku"}, {id: 9,quote: "Homecook"}];

module.exports = {
    getInspiration: (req,res)=>{
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomIns = quotes[randomIndex];
        res.status(200).send(randomIns);
    },


    registerQuote: (req,res)=>{
        console.log(req.body)
        quotes.push(req.body);
        console.log("registering new quote-control.js");     

        res.status(200).send("quotes")
    },
    getAllQuotes: (req, res) => {
        res.status(200).send(quotes);
    },

    deleteQuote: (req,res)=>{
        console.log("control.js clicked delete")
        console.log(req.params.id)
        let index = quotes.findIndex(elem => elem.id === +req.params.id);
        quotes.splice(index,1);

        res.status(200).send(quotes);
    },
    updateQuote: (req,res)=>{
        // console.log("request edit control.js", req.body);
        let index = quotes.findIndex(elem => elem.id === +req.params.id);
        quotes.splice(index,1,req.body);
        // console.log(quotes)
        res.status(200).send(quotes);
    }
}
