// AlternativeController.js
// Generated automatically

exports.index = async (req, res) => {
  res.send("Alternative index");
};

exports.show = async (req, res) => {
  const { id } = req.params;
  res.send("Alternative show " + id);
};

exports.create = async (req, res) => {
  res.send("Alternative create");
};

exports.update = async (req, res) => {
  const { id } = req.params;
  res.send("Alternative update " + id);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  res.send("Alternative delete " + id);
};