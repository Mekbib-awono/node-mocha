let roles = [];

exports.setRoles = (role) => {
    roles = role;
};

exports.setUser = (_user) => {
    // user = _user;
};

exports.isAuthorized = (neededRole) => {
    return roles.includes(neededRole);
};

exports.isAuthorizedAsync = (neededRole, cb) => {
    setTimeout(() => {
        cb(roles.includes(neededRole));
    }, 2100);
};

exports.isAuthorizedPromise = (neededRole) => {
    return new Promise(function (resolve) {
        setTimeout(function (){
            resolve(roles.includes(neededRole));
        }, 0);
    });
};

exports.getIndex = (req, res) => {
    res.render('index');
};
