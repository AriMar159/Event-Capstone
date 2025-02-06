import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    eventname: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
     comments: [
        {
            user: String,
            text: String,
            createdAt: {
                type: Date,
                default: new Date()

            }
        }
     ]

});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;