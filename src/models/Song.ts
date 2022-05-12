import {Document, Schema, model} from 'mongoose';

/**
 * @interface SongInterface Implements a song.
 * @extends Document
 */
interface SongInterface extends Document {
  name: string,
  author: string,
  length: number,
  genres: string[],
  single: boolean,
  plays: number,
}

/**
 * @const SongSchema Song's schema
 */
export const SongSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        // eslint-disable-next-line max-len
        throw new Error('Los nombres de las canciones deben empezar en mayúscula');
      }
    },
  },
  author: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        // eslint-disable-next-line max-len
        throw new Error('Los nombres de los artistas deben empezar en mayúscula');
      }
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
    type: String,
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
  single: {
    type: Boolean,
    required: true,
    validate: (value: boolean) => {
      if (typeof value !== 'boolean') {
        throw new Error('Single es true or false');
      }
    },
  },
  plays: {
    type: Number,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Las reproducciones no pueden ser negativas');
      }
    },
  },
});

/**
 * @const Song
 */
export const Song = model<SongInterface>('Song', SongSchema);
