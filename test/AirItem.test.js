import AirItem from '../src/components/AirItem.js';
const test = QUnit.test;

QUnit.module('Air Item');
test('renders template from data', assert => {
    const air = {
        name: '46th Earth King',
        photoURL: 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441'
    };

    const airItem = new AirItem({ air });
    const rendered = airItem.renderTemplate();
    


    assert.htmlEqual(rendered, /*html*/`
    <li class="air-item">
        <h2>${air.name}</h2>
        <img src="../../assets/placeholder.jpg"> 
        <p> 
        <a href="#enemies=46th+Earth+King">Enemies</a> 
        <a href="#allies=46th+Earth+King">Allies</a> 
        </p> 
    </li>
    `);
});
