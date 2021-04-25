const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema ({

    comments: {
        type: String

    }
})


module.exports = feedback = mongoose.model('feedback', FeedbackSchema)