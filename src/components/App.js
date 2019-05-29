import Component from './Component.js';
import Header from './Header.js';
import AirList from './AirList.js';
import airApi from '../services/Air-api.js';
import Loading from './Loading.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const airList = new AirList({ Airs: [] });
        main.appendChild(airList.render());

        const loading = new Loading({ loading: true });
        main.appendChild(loading.render());
        
        airApi.getAirs()
            .then(airs => {
                airList.update({ airs });
            })
            .finally(() => {
                loading.update({ loading: false });
            });


        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                
                <main>
                    
                </main>
            </div>
        `;
    }
}

export default App;