const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
title: {
    type: String,
    required: true
},
date: {
    type: Date,
    default: Date.now
    },
user_id: {
    type: String,
    required: true
}
}, {
    timestamps: true
});

module.exports = mongoose.model('Tasks', tasksSchema);