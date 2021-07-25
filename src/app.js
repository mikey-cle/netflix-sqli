//import and declare
require('./db/connection');
require('dotenv');
const { addUser, delUser, readUsers, addMovie, delMovie, updateRating, updateWatched} = require('./utils');
const yargs = require('yargs');
const command = process.argv[2];
const username= yargs.argv.username;
const password = yargs.argv.password;
const title = yargs.argv.title;
const actor = yargs.argv.actor;
const watched = yargs.argv.watched;
const ageCert = yargs.argv.age;
const rating = yargs.argv.rating;
const catagory = yargs.argv.cat;

const app = () => {
    if(command === 'add user'){
        addUser(username, password);
    }
    else if(command === 'delete user'){
        delUser(username, password);
    }
    else if(command ==='add movie'){
        addMovie(title, actor, ageCert, rating, catagory);
    }
    else if(command === 'delete movie'){
        delMovie(title);
    }
    else if(command === 'new rating') {
        updateRating(title, rating);
    }
    else if(command === 'update watched'){
        updateWatched(watched, title);
    }
    }
app();
