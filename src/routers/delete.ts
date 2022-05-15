import express from 'express';
import {Song} from '../models/Song';


export const deleteRouter = express.Router();

/**
 * Delete a specific song.
 */
deleteRouter.delete('/song', async (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'A name must be provided',
    });
  }
  try {
    // eslint-disable-next-line max-len
    const song = await Song.findOneAndDelete(req.query.name?{name: req.query.name.toString()}:{});
    if (!song) {
      return res.status(404).send();
    }
    return res.send(song);
  } catch (error) {
    return res.status(400).send();
  }
});

/**
 * Delete a song by id.
 */
deleteRouter.delete('/song/:id', async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      return res.status(404).send();
    }
    return res.send(song);
  } catch (error) {
    return res.status(400).send();
  }
});
