const express = require('express');
const Note = require('../models/NotesModel');

const noteRoutes = express.Router();

// ✅ Create a new Note
noteRoutes.post('/notes', async (req, res) => {
    if (!req.body.noteTitle || !req.body.noteDescription) {
        return res.status(400).send({ message: "Title and Description are required" });
    }

    try {
        const note = new Note({
            noteTitle: req.body.noteTitle,
            noteDescription: req.body.noteDescription,
            priority: req.body.priority || 'LOW'
        });

        const savedNote = await note.save();
        res.status(201).send(savedNote);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// ✅ Get all Notes
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.send(notes);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// ✅ Get a single Note by ID
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        const note = await Note.findById(req.params.noteId);
        if (!note) return res.status(404).send({ message: "Note not found" });
        res.send(note);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// ✅ Update a Note by ID
noteRoutes.put('/notes/:noteId', async (req, res) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.noteId,
            {
                noteTitle: req.body.noteTitle,
                noteDescription: req.body.noteDescription,
                priority: req.body.priority,
                dateUpdated: Date.now()
            },
            { new: true }
        );

        if (!updatedNote) return res.status(404).send({ message: "Note not found" });
        res.send(updatedNote);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// ✅ Delete a Note by ID
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.noteId);
        if (!deletedNote) return res.status(404).send({ message: "Note not found" });
        res.send({ message: "Note deleted successfully" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = noteRoutes;
