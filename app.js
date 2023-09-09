// Importing necessary Modules. 
const express = require('express');
const path = require('path')
const Subscribers = require('./src/models/subscribers');
const { error } = require('console');

const app = express()

// Your code goes here

// API for Home Page // 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});


// GET API for all Subscribers 
app.get("https://get-youtube-subscribers-mohdadnan2506.vercel.app/subscribers", async (req, res) => {
    try {
        let AllSubscribers = await Subscribers.find();
        res.status(200).send(AllSubscribers);
    } catch (error) {
        res.status(500);
    }
});

// GET API for getting subscribers by name and Subscribed Channel
app.get('https://get-youtube-subscribers-mohdadnan2506.vercel.app/subscribers/names', async (req, res) => {
    try {
        let subscriberByName = await Subscribers.find().select('name subscribedChannel');
        res.status(200).send(subscriberByName);
    } catch (error) {
        res.status(400);
    }
});


// GET API for getting subscriber by ID
app.get('https://get-youtube-subscribers-mohdadnan2506.vercel.app/subscribers/:id', async (req, res) => {
    try {
        let subscriberByID = await Subscribers.findById(req.params.id);
        res.status(200).send(subscriberByID);
    } catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});



module.exports = app;
