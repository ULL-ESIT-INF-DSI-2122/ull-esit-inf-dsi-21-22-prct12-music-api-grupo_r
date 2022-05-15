import express from 'express';
import {Song} from '../models/Song';
// import {Artist} from '../models/Artist';
// import {Playlist} from '../models/Playlist';

export const postRouter = express.Router();

/**
 * Post all song.
 */
postRouter.post('/song', async (req, res) => {
  const song = new Song(req.body);

  try {
    await song.save();
    res.status(201).send(song);
  } catch (error) {
    res.status(400).send(error);
  }
});
