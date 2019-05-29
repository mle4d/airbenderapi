import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/`
            <header>
                <img src="../assets/header.jpg" alt="heading picture">
                <h1>Air Benders?</h1>
            </header>
        `;
    }
}

export default Header;