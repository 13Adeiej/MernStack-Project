import express from 'express';
const { login, authenticate } = require('./auth'); // Import authentication functions

// const express = require("express");
const app = express();
 
app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});
 
const PORT = process.env.PORT || 8080;
 


                                // Task 4 Backend Integration 

// Middleware to parse JSON bodies
app.use(express.json());


// Define endpoints
app.get('/api/domains', (req, res) => {
    // Implementation to get domains from the DNS system on GCP
    res.json({ message:'Get all domains' });
});

app.post('/api/domains', (req, res) => {
    // Implementation to add a new domain to the DNS system on GCP
    res.json({ message: 'Add new domain' });
});

// Implement other CRUD endpoints for DNS records


// Route for user login
app.post('/login', login);

// Protected route requiring authentication
app.get('/protected', authenticate, (req, res) => {
    // If authentication succeeds, req.user will contain user data from JWT payload
    res.json({ message: 'You are authenticated', user: req.user });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






