//Using Nanoid for generating unique id propertie 
const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updateAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updateAt,
    };

    notes.push(newNote);

    //to know whether the note's already pushed into array notes or not yet
    const isSucces = notes.filter((note) => note.id === id).length > 0;

    if (isSucces) {
        const response = h.response({
            status: 'success',
            message: 'Note added',
            data: {
                noteId:id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'fail to add note',
    });

    response.code(500);
    return response;
};

//Using literal object to ease us in exporting more than one value in certain javascript file
module.exports = { addNoteHandler };