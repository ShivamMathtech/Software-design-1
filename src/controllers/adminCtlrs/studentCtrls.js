const Cat = require("../../models/Cat");

const studentCtrls = (req, res) => {
  // Model things will be here

  console.log(req.query.voice);
  const kitty = new Cat({ name: req.query.name });
  kitty.save().then(() => console.log("meow"));
  res.status(200).json({
    message: "Student Controller",
  });
};

module.exports = studentCtrls;
