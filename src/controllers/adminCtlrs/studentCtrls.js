const Cat = require("../../models/Cat");

const studentCtrls = (req, res) => {
  // Model things will be here

  console.log(req.query.voice);
  const kitty = new Cat({ name: req.query.name });
  kitty
    .save()
    .then(() => {
      res.status(200).json({
        message: "Data saved successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

module.exports = studentCtrls;
