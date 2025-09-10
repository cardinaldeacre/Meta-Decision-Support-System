// CriteriaController.js
// Generated automatically

exports.index = async (req, res) => {
  res.send("Criteria index");
};

exports.show = async (req, res) => {
  const { id } = req.params;
  res.send("Criteria show " + id);
};

exports.create = async (req, res) => {
  res.send("Criteria create");
};

exports.update = async (req, res) => {
  const { id } = req.params;
  res.send("Criteria update " + id);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  res.send("Criteria delete " + id);
};