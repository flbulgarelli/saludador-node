module.exports = {
  login: function(req, res) {
    res.render('login');
  },
  logut: function(req, res) {
    req.logout();
    res.redirect('/');
  }
}