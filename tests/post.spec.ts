import 'mocha';
import chai from 'chai';
import {expect} from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const url = 'https://musictronik360.herokuapp.com';

describe('Insert a song: ', () => {
  it('Should insert a song', (done) => {
    chai.request(url).post('/song').send({
      id: 10,
      name: 'All of me',
      year: 2017,
      days: 10,
    }).end((err, res) => {
      console.log(res.body);
      expect(res).to.have.status(200);
      done();
    });
  });
});
