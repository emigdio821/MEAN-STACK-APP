'use strict';
var mongoose = require('mongoose'),
    Stuff = mongoose.model('Stuffs');

exports.listAllStuffs = function(req, res) {
    Stuff.find({}, function(err, stuff) {
        if (err) res.send(err);
        res.json(stuff);
    });
};

exports.createStuff = function(req, res) {
    var new_stuff = new Stuff(req.body);
    new_stuff.save(function(err, stuff) {
        if (err) res.send(err);
        res.json(stuff);
    });
};

exports.readStuff = function(req, res) {
    Stuff.findById(req.params.stuffId, function(err, stuff) {
        if (err) res.send(err);
        res.json(stuff);
    });
};

exports.updateStuff = function(req, res) {
    Stuff.findOneAndUpdate({
        _id: req.params.stuffId
    }, req.body, {
        new: true
    }, function(err, stuff) {
        if (err) res.send(err);
        res.json(stuff);
    });
};

exports.deleteStuff = function(req, res) {
    Stuff.remove({
        _id: req.params.stuffId
    }, function(err, stuff) {
        if (err) res.send(err);
        res.json({
            message: 'Stuff deleted successfully.'
        });
    });
};

exports.deleteAllStuff = function(req, res) {
    Stuff.remove({}, function(err, stuff) {
        if (err) res.send(err);
        res.json({
            message: 'All Stuff deleted successfully.'
        });
    });
};
