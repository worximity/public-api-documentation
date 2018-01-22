'use strict';

require("isomorphic-fetch");

module.exports = function() {

    return {

        load(token) {
            let options = { 
                method: 'GET',
                headers: { 
                    'User-Agent': 'Worximity-Examples',
                    'Authorization': 'Bearer ' + token
                }
            }

            return fetch('https://api.pub.worximity.net/products', options).then(response => {
                if (response.status != 200) {
                    throw Error(`Response status code wasn't 200 : ${response.status} ${response.statusText}`);
                }
                return response.json();
            }).then(json => {
                return json;
            });
        },

        delete(token, payload) {
            let options = { 
                method: 'DELETE',
                headers: { 
                    'User-Agent': 'Worximity-Examples',
                    'Authorization': 'Bearer ' + token
                },
                body: payload
            }

            return fetch('https://api.pub.worximity.net/products', options).then(response => {
                if (response.status != 202) {
                    throw Error(`Response status code wasn't 202 : ${response.status} ${response.statusText}`);
                }
                return;
            });
        },

        save(token, payload) {
            let options = { 
                method: 'POST',
                headers: { 
                    'User-Agent': 'Worximity-Examples',
                    'Authorization': 'Bearer ' + token
                },
                body: payload
            }

            return fetch('https://api.pub.worximity.net/products', options).then(response => {
                if (response.status != 202) {
                    throw Error(`Response status code wasn't 202 : ${response.status} ${response.statusText}`);
                }
                return;
            });
        }

    }
    
}