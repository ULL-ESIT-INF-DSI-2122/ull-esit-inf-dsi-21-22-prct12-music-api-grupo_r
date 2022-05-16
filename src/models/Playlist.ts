import {Document, Schema, model} from 'mongoose';

/**
 * @interface PlaylistInterface Implements a playlist.
 * @extends Document
 */
interface PlaylistInterface extends Document {
  name: string,
  songs: string[],
  length: number,
  genres: string[],
}

/**
 * @const PlaylistSchema Playlist's schema
 */
const PlaylistSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        // eslint-disable-next-line max-len
        throw new Error('El nombre de la playlist debe empezar en mayúscula');
      }
    },
  },
  songs: {
    type: [String],
    required: true,
    trim: true,
    validate: (value: string[]) => {
      value.forEach((element) => {
        if (!element.match(/^[A-Z]/)) {
          // eslint-disable-next-line max-len
          throw new Error('Los géneros de la canción deben empezar en mayúscula');
        }
      });
    },
  },
  length: {
    type: Number,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('La duración no puede ser negativa');
      }
    },
  },
  genres: {
    type: [String],
    required: true,
    trim: true,
    validate: (value: string[]) => {
      value.forEach((element) => {
        if (!element.match(/^[A-Z]/)) {
          // eslint-disable-next-line max-len
          throw new Error('Los géneros de la canción deben empezar en mayúscula');
        }
      });
    },
  },
});

/**
 * @const Playlist
 */
export const Playlist = model<PlaylistInterface>('Playlist', PlaylistSchema);
