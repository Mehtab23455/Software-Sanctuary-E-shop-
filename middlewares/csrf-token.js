function addCsrfToken(req, res, next){
  res.locals.csrftoken = req.csrfToken();
  next();
}

module.exports = addCsrfToken;