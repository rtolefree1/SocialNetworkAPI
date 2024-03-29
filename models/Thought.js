const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction')

const thoughtSchema = new Schema({

    thoughtText:
    {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createAt:
    {
        type: Date,
        default: Date.now, // create your format Date
        // get: timeStamp => formatDate(timeStamp)
    },
    username:
    {
        type: String,
        required: true
    },
    // reactionBody: [Reaction]
    // reactions:[
    reactionBody:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
        },
    ],
    
},
{
    toJSON: 
    {
      virtuals: true,
    },
      id: false
    },

)

// Create a virtual property `userCount` that gets the length of user's friends
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactionBody.length;
  });
  
  // Initialize our Thought model
  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;