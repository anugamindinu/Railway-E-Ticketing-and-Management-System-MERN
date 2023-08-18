import mongoose from "mongoose";
const Schema = mongoose.Schema;

const remsschema = new Schema({
    name:{
        type : String,
        require : true
    },
    numberOfPassengers:{
        type: Number,
        require : true
    },
    startStation:{
        type : String,
        required : true
    },
    endStation:{
        type : String,
        required : true
    },
    classno:{
        type: Number,
        require: true
    },
    date:{
        type : Date,
        required : true
    },
    food:{
        type : String,
        required : true
    }
})

const nomelticket = mongoose.model("Nomelticket",remsschema);

module.exports = nomelticket;
