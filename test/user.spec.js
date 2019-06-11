
const should = require('chai').should();
const sinon = require('sinon');
const UserController = require('../src/UserController');

describe.only('userController', function () {
    it('does not save the user without username', function () {
        const User = function(){
            this.save = () => {

            };
        };

        const req = {
            body: {
                username: 'johndoe',
            },
        };

        const res = {
            status: sinon.spy(),
            send: sinon.spy(),
            json: sinon.spy(),
        };

        const userController = new UserController(User, req, res);
        userController.post(req, res);
        res.status.calledWith(400).should.equal(true, `Bad status ${res.status.args[0][0]}`);    
        res.send.calledWith('Username is required').should.equal(true);


    });
});