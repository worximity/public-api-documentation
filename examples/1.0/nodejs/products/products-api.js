'use strict';

require("isomorphic-fetch");

module.exports = function() {

    return {

        save(token, payload) {
            let options = { 
                method: 'POST',
                headers: { 
                    'User-Agent': 'Worximity-Examples',
                    'Authorization': 'Bearer ' + token
                },
                body: payload
            }

            return fetch('https://api.pub.worximity.net/v1.0/products/batch', options).then(response => {
                if (response.status != 202) {
                    throw Error(`Response status code wasn't 202 : ${response.status} ${response.statusText}`);
                }
                return;
            });
        }

    }
    
}