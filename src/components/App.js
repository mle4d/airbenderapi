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

        function loadCharacters() {
            const params = window.location.hash.slice(1);

            const searchParams = new URLSearchParams(params);
            const stringParams = searchParams.toString();
            console.log(stringParams);
            airApi.getAirs(stringParams)
                .then(Airs => {
                    airList.update({ Airs });
                })
                .finally(() => {
                    loading.update({ loading: false });
                });
        }

        loadCharacters();
        
        window.addEventListener('hashchange', () => {
            loadCharacters();
        });



        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                
                <main>
                    <!--a href="#">Enemies</a>
                    <a href="#">Allies</a-->
                </main>
            </div>
        `;
    }
}

export default App;