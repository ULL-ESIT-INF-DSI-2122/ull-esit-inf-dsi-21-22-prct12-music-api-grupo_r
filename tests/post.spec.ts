import 'mocha';
import chai from 'chai';
import {expect} from 'chai';
import chaiHttp from 'chai-http';


chai.use(chaiHttp);
const url = 'https://musictronik360.herokuapp.com';

// vv COMMENT THE LINE BELLOW TO ENABLE CONSOLE.LOGS FROM THE FUNCTIONS (DISABLED BECAUSE BLOATS THE TESTS REPORT ) vvvv
//console.log = function() {};
// ^^ COMMENT THE LINE ABOVE TO ENABLE CONSOLE.LOGS FROM THE FUNCTIONS (DISABLED BECAUSE BLOATS THE TESTS REPORT ) ^^^^

describe('Insert a song: ', () => {
  it('Should insert a song', (done) => {
    chai.request(url).post('/song').send({
      name: 'All of me',
      author: 'Jonh Legend',
      length: 120,
      genres: [
        'Pop',
      ],
      single: true,
      plays: 1000,
    }).end((err, res) => {
      if (err) {
        throw new Error('An error has occur');
      }
      console.log(res.body);
      expect(res).to.have.status(201);
      done();
    });
  });
});


describe('Insert an artist: ', () => {
  it('Should insert a artist', (done) => {
    chai.request(url).post('/artist').send({
      name: 'Jonh Legend',
      genres: [
        'Pop',
      ],
      songs: [
        'All of me',
      ],
      audience: 1250,
    }).end((err, res) => {
      if (err) {
        throw new Error('An error has occur');
      }
      console.log(res.body);
      expect(res).to.have.status(201);
      done();
    });
  });
});


describe('Insert an playlist: ', () => {
  it('Should insert a playlist', (done) => {
    chai.request(url).post('/playlist').send({
      name: 'Veranito sin DSI',
      songs: [
        'All of me',
      ],
      length: 120,
      genres: [
        'Pop',
      ],
    }).end((err, res) => {
      if (err) {
        throw new Error('An error has occur');
      }
      console.log(res.body);
      expect(res).to.have.status(201);
      done();
    });
  });
});
