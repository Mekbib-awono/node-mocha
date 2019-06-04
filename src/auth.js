let roles = [];

exports.setRoles = (role) => {
    roles = role;
};

exports.isAuthorized = (neededRole) => {
    return roles.includes(neededRole);
};

exports.isAuthorizedAsync = (neededRole, cb) => {
    setTimeout(() => {
        cb(roles.includes(neededRole))
    }, 2100)
};

exports.isAuthorizedPromise = (neededRole, cb) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function (){
            resolve(roles.includes(neededRole));
        }, 0)
    })
}


