import Component from './Component.js';
import AirItem from './AirItem.js';

class AirList extends Component {
    render() {
        const list = this.renderDOM();

        this.props.Airs.forEach(air => {
            const airItem = new AirItem({ air });
            list.appendChild(airItem.render());
        });
        
        return list;
    }

    renderTemplate() {
        return /*html*/`
        <ul class="air-list">
        </ul>
        `;
    }
}

export default AirList;