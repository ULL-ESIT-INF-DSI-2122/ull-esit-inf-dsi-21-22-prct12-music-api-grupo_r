/**import 'mocha';
import chai from 'chai';
import {expect} from 'chai';
import chaiHttp from 'chai-http';


chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('Get request test', () => {
  describe('Get all the songs', () => {
    it('Should get all songs', (done) => {
      chai.request(url).get('/song').end((err, res) => {
        if (err) {
          throw new Error('An error has occur');
        }
        console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
    });

    it('Should get all artists', (done) => {
      chai.request(url).get('/artist').end((err, res) => {
        if (err) {
          throw new Error('An error has occur');
        }
        console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
    });

    it('Should get all playlists', (done) => {
      chai.request(url).get('/playlist').end((err, res) => {
        if (err) {
          throw new Error('An error has occur');
        }
        console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
    });
  });

  describe('Get a specific song', () => {
    it('Should get a specific song', (done) => {
      chai.request(url).get('/song/All of me').end((err, res) => {
        if (err) {
          throw new Error('An error has occur');
        }
        console.log(res.body);
        expect(res.body).to.have.property('id').to.be.equal(1);
        expect(res).to.have.status(200);
        done();
      });
    });

    it('Should get a specific artist', (done) => {
      chai.request(url).get('/artist/Jonh Lennon').end((err, res) => {
        if (err) {
          throw new Error('An error has occur');
        }
        console.log(res.body);
        expect(res.body).to.have.property('id').to.be.equal(1);
        expect(res).to.have.status(200);
        done();
      });
    });
  });

  it('Should get a specific playlist', (done) => {
    chai.request(url).get('/playlist/Mi playlist').end((err, res) => {
      if (err) {
        throw new Error('An error has occur');
      }
      console.log(res.body);
      expect(res.body).to.have.property('id').to.be.equal(1);
      expect(res).to.have.status(200);
      done();
    });
  });
});
*/
