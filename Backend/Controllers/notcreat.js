import Notes from "../Models/Note.js"


async function creatnote(req, res) {
    try {
        const { title, note, status } = req.body
        const userid = req.user.id
        const cnotes = await Notes.create({
            title,
            note,
            status,
            Createdby: userid
        })
        res.json(cnotes)
    } catch (error) {
        console.log('Error arhah h creating m ', error)
    }
}

export default creatnote