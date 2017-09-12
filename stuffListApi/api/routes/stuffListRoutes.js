'use strict';
module.exports = function(app) {
    var stuffList = require('../controllers/stuffListController');

    app.route('/stuffs')
        .get(stuffList.listAllStuffs)
        .delete(stuffList.deleteAllStuff)
        .post(stuffList.createStuff);

    app.route('/stuffs/:stuffId')
        .get(stuffList.readStuff)
        .put(stuffList.updateStuff)
        .delete(stuffList.deleteStuff);
};
