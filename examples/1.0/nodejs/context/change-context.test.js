'use strict';

const fetchMock = require('fetch-mock');
const expect = require("chai").expect;
const changeContextService = require("./context-api")()
const MockDate = require("mockdate");
const moment = require("moment");

describe("The Context API", () => {

    beforeEach(() => {
        MockDate.reset();
        fetchMock.restore()
    });


    /**
     * This Test Assert that the Originate Timestamp is the current time of your sending when sending the request.  
     * This allow worximity to normalize context timestamp with other device that change information like the TileConnect or the Tileboard App.
     */
    it("should provide the Proper Header and The Originate Timestamp to context request", () => {
        MockDate.set(moment.parseZone("2018-12-05T13:00:00.000Z"));

        fetchMock.post('https://api.pub.worximity.net/v1.0/contexts', 202); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            expect(result).to.be.undefined;

            let request = fetchMock.lastOptions('https://api.pub.worximity.net/v1.0/contexts');

            expect(request.method).to.equal("POST");
            expect(request.headers["User-Agent"]).to.not.be.undefined;
            expect(request.headers["Authorization"]).to.equal("Bearer mytoken");
            expect(request.body).to.deep.equal({
                "contexts": [{
                    "production_unit_id": "pu-3asdas-1b324a75",
                    "sku": "A1230",
                    "datetime": "2018-12-05T12:59:40.123Z"
                }],
                "originate_datetime": "2018-12-05T13:00:00.000Z"
            });
        }

        let productChange = {
            "contexts": [{
                "production_unit_id": "pu-3asdas-1b324a75",
                "sku": "A1230",
                "datetime": "2018-12-05T12:59:40.123Z"
            }]
        }
        return changeContextService.changeContext('mytoken', productChange).then(assertions);
    });

    
     it("should allow sending multiple contexts in case of connection outage", () => {
        MockDate.set(moment.parseZone("2018-12-05T13:00:00.000Z"));

        fetchMock.post('https://api.pub.worximity.net/v1.0/contexts', 202); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            expect(result).to.be.undefined;

            let request = fetchMock.lastOptions('https://api.pub.worximity.net/v1.0/contexts');

            expect(request.method).to.equal("POST");
            expect(request.headers["User-Agent"]).to.not.be.undefined;
            expect(request.headers["Authorization"]).to.equal("Bearer mytoken");
            expect(request.body).to.deep.equal({
                "contexts": [{
                    "production_unit_id": "pu-3asdas-1b324a75",
                    "sku": "A1230",
                    "datetime": "2018-12-05T12:50:40.123Z"
                },
                {
                    "production_unit_id": "pu-3asdas-1b324a75",
                    "sku": "",
                    "datetime": "2018-12-05T12:59:40.123Z"
                }],
                "originate_datetime": "2018-12-05T13:00:00.000Z"
            });
        }

        let productChange = {
            "contexts": [{
                "production_unit_id": "pu-3asdas-1b324a75",
                "sku": "A1230",
                "datetime": "2018-12-05T12:50:40.123Z"
            },
            {
                "production_unit_id": "pu-3asdas-1b324a75",
                "sku": "",
                "datetime": "2018-12-05T12:59:40.123Z"
            }]
        }
        return changeContextService.changeContext('mytoken', productChange).then(assertions);
    });
});


