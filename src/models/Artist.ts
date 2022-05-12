import {Document, Schema, model} from 'mongoose';

/**
 * @interface ArtistInterface Implements an artist.
 * @extends Document
 */
interface ArtistInterface extends Document {
  name: string,
  genres: string[],
  songs: any[],
  listeners: number,
}

/**
 * @const ArtistSchema Artist's schema
 */
const ArtistSchema = new Schema({
  name: {
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
  songs: {
    type: Object,
    required: true,
  },
  listeners: {
    type: Number,
    required: true,
    validate: (value: number) => {
      if (value < 0) {
        throw new Error('Los oyentes mensuales no pueden ser negativos');
      }
    },
  },
});

/**
 * @const Artist
 */
export const Artist = model<ArtistInterface>('Artist', ArtistSchema);
