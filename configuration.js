//Request configuration.
const options = {
   method: 'GET',
   params: {collectible: '1', locale: 'ptBR'},
   headers: {
     'X-RapidAPI-Key': '81935cf82dmsh5cbfb766a872ce7p16553cjsnec4be953734c',
     'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
   }
};

//Decks name.
const decksEn = [
   { key:'1', value:'Ashes of Outland' },
   { key:'2', value:'Blackrock Mountain' },
   { key:'3', value:'Caverns of Time' },
   { key:'4', value:'Core' },
   { key:'5', value:'Demon Hunter Initiate' },
   { key:'6', value:'Descent of Dragons' },
   { key:'7', value:'Festival of Legends' },
   { key:'8', value:'Forged in the Barrens' },
   { key:'9', value:'Fractured in Alterac Valley' },
   { key:'10', value:'Galakrond\'s Awakening' },
   { key:'11', value:'Goblins vs Gnomes' },
   { key:'12', value:'Journey to Un\'Goro' },
   { key:'13', value:'Knights of the Frozen Throne' },
   { key:'14', value:'Legacy' },
   { key:'15', value:'March of the Lich King' },
   { key:'16', value:'Madness at the Darkmoon Faire' },
   { key:'17', value:'Mean Streets of Gadgetzan' },
   { key:'18', value:'Murder at Castle Nathria' },
   { key:'19', value:'One Night in Karazhan' },
   { key:'20', value:'Path of Arthas' },
   { key:'21', value:'Rastakhan\'s Rumble' },
   { key:'22', value:'Rise of Shadows' },
   { key:'23', value:'Saviors of Uldum' },
   { key:'24', value:'Scholomance Academy' },
   { key:'25', value:'Showdown in the Badlands' },
   { key:'26', value:'The Boomsday Project' },
   { key:'27', value:'The Grand Tournament' },
   { key:'28', value:'The Witchwood' },
   { key:'29', value:'TITANS' },
   { key:'30', value:'United in Stormwind' },
   { key:'31', value:'Voyage to the Sunken City' },
   { key:'32', value:'Whispers of the Old Gods' }
];

export {options, decksEn};

