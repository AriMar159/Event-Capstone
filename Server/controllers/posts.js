import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
   try {
    const postMessages = await PostMessage.find(); // Renamed to match the response

    console.log(postMessages);

    res.status(200).json(postMessages); // Fixed variable name here
   } catch (error) {
    res.status(404).json({ message: error.message });
   }
}

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
   await newPost.save();

   res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({message: error.message });

  }
}
