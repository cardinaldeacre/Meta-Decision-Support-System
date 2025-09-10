// ScoreController.js
// Generated automatically

exports.index = async (req, res) => {
  res.send("Score index");
};

exports.show = async (req, res) => {
  const { id } = req.params;
  res.send("Score show " + id);
};

exports.create = async (req, res) => {
  res.send("Score create");
};

exports.update = async (req, res) => {
  const { id } = req.params;
  res.send("Score update " + id);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  res.send("Score delete " + id);
};