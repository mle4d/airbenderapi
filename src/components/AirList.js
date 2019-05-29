import Component from './Component.js';
import AirItem from './AirItem.js';

class AirList extends Component {
    render () {
        const list = this.renderDOM();
    }
    return list;
}

    renderTemplate() {
        return /*html*/`
        <ul class="air-list">
        <h2>46th Earth King</h2>
        <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441"
        alt id="46th Earth King">
        <h2>Aang</h2>
        <img src="https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003" 
        alt id="Aang">
        <h2>Afiko</h2>
        <img src="https://vignette.wikia.nocookie.net/avatar/images/2/24/Afiko.png/revision/latest?cb=20121121024128"
        alt id="Afriko">
        </ul>
        `;
    }
}

export default AirList;