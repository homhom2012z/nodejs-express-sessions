const isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.status(403).send("Forbidden.");
  }
};

module.exports = {
  isAuth,
};
