const fs = require('fs');
const text = fs.readFileSync('src/pages/ShipPage.tsx', 'utf8');

let o = (text.match(/<div/g) || []).length;
let c = (text.match(/<\/div>/g) || []).length;

console.log('Open:', o, 'Close:', c);
