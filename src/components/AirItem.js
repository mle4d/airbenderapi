import Component from './Component.js';

class AirItem extends Component {
    renderTemplate() {
        const air = this.props.air;
        const src = air.photoUrl || '../../assets/placeholder.jpg';
        return /*html*/`
        <li class="air-item">
        <h2>${air.name}</h2>
        <img src="${src}">
        </li>
        `;
    }
}


export default AirItem;