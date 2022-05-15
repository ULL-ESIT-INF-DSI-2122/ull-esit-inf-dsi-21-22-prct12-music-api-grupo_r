import express from 'express';
import {Song} from '../models/Song';
// import {Artist} from '../models/Artist';
// import {Playlist} from '../models/Playlist';

export const patchRouter = express.Router();

patchRouter.patch('/song', async (req, res) => {
  if (!req.query.name) {
    return res.status(400).send({
      error: 'A name must be provided',
    });
  }
  // eslint-disable-next-line max-len
  const allowedUpdates = ['name', 'author', 'length', 'genres', 'single', 'plays'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    // eslint-disable-next-line max-len
    const song = await Song.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!song) {
      return res.status(404).send();
    }

    return res.send(song);
  } catch (error) {
    return res.status(400).send(error);
  }
});

patchRouter.patch('/song/:id', async (req, res) => {
  // eslint-disable-next-line max-len
  const allowedUpdates = ['name', 'author', 'length', 'genres', 'single', 'plays'];
  const actualUpdates = Object.keys(req.body);
  // eslint-disable-next-line max-len
  const isValidUpdate = actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    // eslint-disable-next-line max-len
    const song = await Song.findOneAndUpdate(req.query.name?{name: req.query.name.toString()}:{}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!song) {
      return res.status(404).send();
    }
    return res.send(song);
  } catch (error) {
    return res.status(400).send(error);
  }
});
