import express from 'express';
import {Song} from '../models/Song';
import {Artist} from '../models/Artist';
import {Playlist} from '../models/Playlist';

export const deleteRouter = express.Router();

/**
 * Delete a specific song.
 */
deleteRouter.delete('/song', (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: 'Name must be provided',
    })
  }
});