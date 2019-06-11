
class UserController {
    constructor (User, req, res) {
        this.user = new User(req, res);
    }

    post(req, res) {
        // const user = new User(req, res);
        if (req.body.username) {
            res.status(400);
            return res.send('Username is required');
        }

        this.user.save();
        this.user.status(201);
        return res.json(this.user);
    }
}

module.exports = UserController;