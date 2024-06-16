const rootcontroller = (req, res) => {
  res.status(200).send({
    message: "welcome to express",
  });
};
module.exports = rootcontroller;
