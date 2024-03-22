const jwt = require("jsonwebtoken");

function generateToken(user){
    const jwt = require('jsonwebtoken');

    function generateToken(user) {
        const payload = {
            userId: user.id,
            email: user.email,
            // Add other user data to the payload if needed
        };
    
        // Change 'secretKey' to a strong secret key
        return jwt.sign(payload, 'secretKey', { expiresIn: '1h' });
    }
    
    function verifyToken(token) {
        try {
            // Change 'secretKey' to the same secret key used for signing
            return jwt.verify(token, 'secretKey');
        } catch (err) {
            return null;
        }
    }
    
    module.exports = { generateToken, verifyToken };
}