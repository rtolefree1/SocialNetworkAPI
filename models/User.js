const { Schema, model } = require('mongoose');


const userSchema = new Schema({

    username:
    {
        type: String,
        Unique: true,
        required: true,
        trimmed: true
    },
    email:
    {
        type: String,
        required: true,
        Unique: true
    },
    thoughts:[
    {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    },
    ],
    friends:[
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    ],

},
    {
    toJSON: 
    {
      virtuals: true,
    },
      id: false
    }
)

// Create a virtual property `userCount` that gets the length of user's friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Initialize our Post model
const User = model('users', userSchema);

module.exports = User;
