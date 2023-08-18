const express = require("express");
const router = express.Router();

let ticketModel = require("../models/worrent.js");


//create a ticket

router.route("/add").post((req, res) => {

    console.log(req);
    const name = req.body.name;
    const numberOfPassengers = Number(req.body.numberOfPassengers);
    const startStation = req.body.startStation;
    const endStation = req.body.endStation;
    const classno = Number(req.body.classno);
    const date = Date(req.body.date);
    const food = req.body.food;
    const image = req.body.image;


    console.log(req.body)
    const newTicket = new ticketModel({
        name,
        numberOfPassengers,
        startStation,
        endStation,
        classno,
        date,
        food,
        image
    })

    newTicket.save().then(() => {
        res.json("ticket added")
    }).catch((err) => {
        console.log(err);
    })

})



//read all tickets


router.route("/addticket").get((req, res) => {
    ticketModel.find().then((tickets) => {
        res.json(tickets)
    }).catch((err) => {
        console.log(err)
    })
})


//update a ticket

router.route("/update/:id").put(async(req, res)=>{

    let userid = req.params.id;
    const {name, numberOfPassengers, startStation, endStation, classno, date,food,image} = req.body;

    const updateticket = {
        name,
        numberOfPassengers,
        startStation,
        endStation,
        classno,
        date,
        food,
        image
    }

    const update = await ticketModel.findByIdAndUpdate(userid, updateticket)
    .then(()=> {
        res.status(200).send({status:"Ticket updated"})
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({status:"ERROR With updating data!", error: err.message});
    });
});



//delete a ticket

router.route("/delete/:id").delete(async(req, res)=>{

    let userid = req.params.id;

    await ticketModel.findByIdAndDelete(userid)
    .then(()=> {
        res.status(200).send({status: "Ticket deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "ERROR With deleting data!", error: err.message});
    });
});

module.exports = router; //Export Router
