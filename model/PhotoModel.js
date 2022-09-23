const mongoose = require('mongoose')


const photoSchema = new mongoose.Schema({
    constituent: String,
    photoName: String,
    details: String,
    photoCategory: String,
    shortDetail: String,
    photoURL: { 
        type: String,
        default: 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg',
        
    },
    createdat: {
        type: Date,
        default: Date.now()
    }
})

const Photo =  mongoose.model ('Photo', photoSchema);
module.exports = Photo;
