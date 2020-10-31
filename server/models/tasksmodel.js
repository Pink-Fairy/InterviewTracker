const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
title: {
    type: String,
    require: true
},
date: {
    type: Date,
    default: Date.now
    },
user_id: {
    type: String,
    require: true
}
}, {
    timestamps: true
});

module.exports = mongoose.model('Tasks', tasksSchema);