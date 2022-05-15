import express from 'express';
import {Song} from '../models/Song';


export const deleteRouter = express.Router();

/**
 * Delete a specific song.
 */
deleteRouter.delete('/song', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'Name must be provided',
    });
  } else {
    Song.findOneAndDelete({name: req.query.name.toString()}).then((song) => {
      if (!song) {
        res.status(404).send();
      }
    });
  }
});
