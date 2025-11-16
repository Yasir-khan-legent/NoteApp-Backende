import Notes from "../Models/Note.js"


async function updatenote(req,res) {
    
try {
 const id = req.params.id
 const {title,note,status}= req.body
  const updatedata = await Notes.findByIdAndUpdate(
    id,              
    { title,note,status },            
    { new: true }         
  );

  res.json(updatedata);

    
} catch (error) {
    console.log(error)
}
}

export default updatenote