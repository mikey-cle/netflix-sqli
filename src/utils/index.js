const yargs = require('yargs');
const sql =require('../db/connection');
require("dotenv").config();

//add user function
exports.addUser = (username, password) => {
    try {
        const user = [username, password];
        sql.query("INSERT INTO users SET username = ?, password = ?", user);
        } catch (error) {
        console.log(error);
       
    }
}
//delete user function
exports.delUser = (username, password) => {
    try {
        const userToDelete = [username, password];
        sql.query("DELETE FROM users WHERE username = ? AND password = ?", userToDelete);
    } catch (error) {
        console.log(error)
    }
}
exports.addMovie = (title, actor, ageCert, rating, catagory) =>{
    movie = [title, actor, ageCert, rating, catagory];
    sql.query("INSERT INTO movies SET title = ?, actor = ?, ageCert = ?, rating = ?, catagory = ?", movie);
}
exports.delMovie = (title) =>{
    sql.query("DELETE FROM movies WHERE title = ?", title);
}
exports.updateRating = (title, rating) =>{
    update = [rating, title];
    sql.query("UPDATE movies SET rating = ? WHERE title = ?", update);
}
exports.updateWatched = (watched, title) =>{
    update = [watched, title];
    sql.query("UPDATE movies SET watched = ? WHERE title = ?", update);
}


// Accept input from the terminal using process.argv or yargs.argv
// Perform CRUD operations on both the users table and the movies table
// On at least one of these operations your query should run a password check for the user.
// The minimum info to be stored for a user is username and password. For movies it should be title, watched and a foreign key linking it to a user.
// I would like to see aggregate functions and joins used in your final submission.
// Optional Extras
// Movies could also have categories, ratings and actors. Users could have email address, first and last names