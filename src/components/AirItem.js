import Component from './Component.js';

class AirItem extends Component {
    renderTemplate() {
        const air = this.props.air;
        const src = air.photoUrl || '../../assets/placeholder.jpg';

        const enemyLink = new URLSearchParams();
        enemyLink.set('enemies', air.name);
        const allyLink = new URLSearchParams();
        allyLink.set('allies', air.name);
        
        return /*html*/`
        <li class="air-item">
            <h2>${air.name}</h2>
            <img src="${src}">
            <p>
            <a href="#${enemyLink.toString()}">Enemies</a>
            <a href="#${allyLink.toString()}">Allies</a>
            </p>
        </li>
        `;
    }
}


export default AirItem;