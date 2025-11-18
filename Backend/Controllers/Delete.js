import Notes from "../Models/Note.js"

async function Deleteone(req, res) {
  try {
    await Notes.findByIdAndDelete(req.params.id);
    res.json({ message: "Note Deleted Successfully." });
  } catch (error) {
    res.status(500).json({ message: 'Error while deleting note.' });
  }
}


async function Deleteall(req, res) {
  try {
    const userid = req.user.id
    await Notes.deleteMany({ Createdby: userid });
    res.json({ message: "All notes deleted successfully." });
  } catch (err) {
    res.json({ error: err.message });
  }
}

export { Deleteone, Deleteall }