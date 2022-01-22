exports.register = (req, res, next) => {
  res.send('Register route');
};

exports.login = (req, res, next) => {
  res.send('login route');
};

exports.forgotpassword = (req, res, next) => {
  res.send('forgotpassword route');
};

exports.resetpassword = (req, res, next) => {
  res.send('resetpassword route');
};
