'use strict';

require("isomorphic-fetch");
const cloneDeep = require("lodash.clonedeep");
const moment = require("moment");
module.exports = function() {

    return {

        changeContext(token, payload) {
            let payloadWithCurrentTime = cloneDeep(payload);
            payloadWithCurrentTime["originate_datetime"] = moment().toISOString();
           
            let options = { 
                method: 'POST',
                headers: { 
                    'User-Agent': 'Worximity-Examples',
                    'Authorization': 'Bearer ' + token
                },
                body: payloadWithCurrentTime
            }

            return fetch('https://api.pub.worximity.net/v1.0/contexts', options).then(response => {
                if (response.status != 202) {
                    throw Error(`Response status code wasn't 202 : ${response.status} ${response.statusText}`);
                }
                return;
            });
        }

    }
    
}