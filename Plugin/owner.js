const {Module} = require('../main')
const {skbuffer} = require('raganork-bot');
const {MODE} = require('../config');
let auto = MODE == 'public' ? false : true
//================================================
//              TEXT SENDER SAMPLE 👇
// ===============================================
Module({
  pattern: 'text ?(.*)',
  fromMe: auto,
  desc: 'Sends text',
  use: 'utility',
}, async (m,t) => {
await m.sendReply("*wa.me/918602306506*") 
});
