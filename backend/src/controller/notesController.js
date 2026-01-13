import Note from "../models/notes.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({createdAt: -1});
    res.status(200).json(notes);
  } catch (err) {
    console.log("issue in controller notes", err);
    res.status(500).json({
      message: "internal server error",
    });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(200).json(savedNote);
  } catch (err) {
    console.log("issue in controller notes", err);
    res.status(500).json({
      message: "internal server error",
    });
  }
}

export async function updateNote(req, res) {
  const { title, content } = req.body;
  const ifFoundId = await Note.findByIdAndUpdate(req.params.id, {
    title,
    content,
  });
  if (!ifFoundId) return res.status(404).json({ message: "Note not found" });
  res.status(200).json({
    message: "Note Updated successfully",
  });
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      res
        .status(404)
        .json({ message: "note not found , cant delete the data" });
    res.status(200).json({ message: "Note Deleted successfully" });
  } catch (err) {
    console.log("issue in controller notes", err);
    res.status(500).json({
      message: "internal server error",
    });
  }
}

export async function getNotebyId(req, res) {
  try {
    const noteId = await Note.findById(req.params.id);
    if (!noteId)
      res.status(404).json({
        message: "Note not found, provide valid id for the note",
      });
    res.status(200).json({ title: noteId.title, content: noteId.content });
  } catch (error) {
    console.log("issue in controller notes", err);
    res.status(500).json({
      message: "internal server error",
    });
  }
}
