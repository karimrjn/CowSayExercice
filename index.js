const wilderInfo = require('./information.js')

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello i'm ${wilderInfo.name} from ${wilderInfo.campus} !`,
    e : "oO",
    T : "U "
}));