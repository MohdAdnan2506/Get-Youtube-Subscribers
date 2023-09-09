Get-Youtube-Subscribers
This is an AlmaBetter Capstone Project for Getting Youtube Subscribers from the Database In this project we have created backend APIs to send response in the form of JSON data

The project contains following APIs-

GET [http://localhost:3000/subscribers] - Responds with an array of subscribers(an Object).

GET [http://localhost:3000/subscribers/names] - Responds with an array of subscribers(an Object with only two fields name and subscribedChannel).

GET [http://localhost:3000/subscribers/:id] - Responds with a subscriber*(an object)* with given id & Responds with status code 400 and Error message({message: error.message}) if id does not match.

To run this project locally, make sure you have NodeJS and MongoDB installed in your machine. After that, Run following Commands in your CLI-

Clone the repository- https://github.com/MohdAdnan2506/Get-Youtube-Subscribers

Install dependencies - npm i

Create Database by running createDatabase.js node createDatabase.js

Start The Application node index.js

go to browser and search localhost:3000
