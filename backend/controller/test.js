exports.test = async (req, res) => {
  try {
    res.json({ message: "hello World" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
