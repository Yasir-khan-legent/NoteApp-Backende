import Notes from "../Models/Note.js";

// async function FetchData(req, res) {
//   try {
//     const userid = req.user.id
//     console.log(userid)  

//     const notes = await Notes.find({ Createdby: userid });
//     res.json(notes);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching data' });
//   }
// }





async function FetchData(req, res) {
  try {
    console.log("Cookies:", req.cookies);
    const userid = req.user.id
    console.log(userid)
    const notes = await Notes.find({ Createdby: userid });
    res.json(notes);
  } catch (error) {
    console.log("FetchData Error:", error.message);
    res.status(500).json({ message: 'Error fetching data' });
  }
}

export default FetchData;