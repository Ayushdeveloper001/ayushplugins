const {
	Function,
	isPublic
} = require('../lib/')

Function({
	pattern: 'owner ?(.*)',
	fromMe: isPublic,
	desc: 'Sends contact',
	type: 'misc',
}, async (message, match) => {

const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Suman\n' // full name
            + 'ORG:Asam;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=918638498794:+91 86384 98794/n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(
    message.chat,
    { 
        contacts: { 
            displayName: 'Owner : Suman', 
            contacts: [{ vcard }] 
        }
    }
)
