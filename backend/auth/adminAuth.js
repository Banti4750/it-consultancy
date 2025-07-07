const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        // Check if the Authorization header is present and well-formed
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ 
                message: "Authorization token is missing or invalid" 
            });
        }
        
        const token = authHeader.split(' ')[1];
        
        // Verify token exists after splitting
        if (!token) {
            return res.status(401).json({ 
                message: 'No authentication token, authorization denied.' 
            });
        }

        // Verify the token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        
        next();
    } catch (err) {
        // Handle specific JWT errors
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ 
                message: 'Invalid token, authorization denied.' 
            });
        } else if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ 
                message: 'Token expired, authorization denied.' 
            });
        } else {
            return res.status(500).json({ 
                message: 'Server error during authentication.' 
            });
        }
    }
};

module.exports = adminAuth;