module.exports = function(req, res, next) {
    // Status code of 401 --> 'Unauthorized'
    console.log("Ensured middleware")
    if (!req.user) return res.status(401).json('Unauthorized');
    // Okay!
    next();
  };