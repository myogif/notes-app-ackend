const NotesPayloadSchema = require('./schema');

const NotesValidator = {
  validateNotesPayload: (payload) => {
    const validationResult = NotesPayloadSchema(payload);
    if(validationResult.error){
      throw new Error(validationResult.error.message);
    }
  }
}

module.exports = NotesValidator;