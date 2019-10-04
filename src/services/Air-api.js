const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const api = {
    getAirs(enemies) {
        let url = URL;

        if(enemies) {
            url = `${URL}?${enemies}`;
        }
            
        return fetch(url)
            .then(response => response.json());
    }
};

export default api;