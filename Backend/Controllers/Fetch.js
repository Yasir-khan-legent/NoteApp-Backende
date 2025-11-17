import Notes from "../Models/Note.js";

async function FetchData(req, res) {
  try {
    const userid = req.user.id
    const notes = await Notes.find({ Createdby: userid });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data' });
  }
}

export default FetchData;