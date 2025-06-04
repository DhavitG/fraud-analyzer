function adminAuth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({error: "Missing or invalid token"})
    }

    const token = authHeader.split(" ")[1];

    if(token !== process.env.ADMIN_TOKEN) {
        return res.status(403).json({error: "Unauthorized access"})
    }

    next();
}

module.exports = {adminAuth}