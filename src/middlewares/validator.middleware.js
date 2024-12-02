const { validationResult } = require('express-validator');

const runValidation = (req, res, next) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    console.log(errors);
    return res.status(400).json({
      errors: errors.array().map(item => item.msg)
    });
  }

  next();
};

module.exports = { runValidation };
