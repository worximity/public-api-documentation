'use strict';

const fetchMock = require('fetch-mock');
const expect = require("chai").expect;
const changeContextService = require("./context-api")()
const moment = require("moment");

describe("The Product Context API", () => {

    beforeEach(() => {
        fetchMock.restore()
    });


    /**
     * This test illustrate how to only change a Product while letting Tileboard apply the other information. 
     * This will be the same behavior as changing a product manually through the Tileboard App.
     */
    it("should change current product", () => {
        fetchMock.post('https://api.pub.worximity.net/v1.0/contexts', 202); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            let request = fetchMock.lastOptions('https://api.pub.worximity.net/v1.0/contexts');
            expect(request.body.contexts[0].production_unit_id).to.equal("pu-3asdas-1b324a75");
            expect(request.body.contexts[0].sku).to.equal("A1230");
            expect(request.body.contexts[0].datetime).to.equal("2018-12-05T12:59:40.123Z");
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

     /**
     * This test illustrate how to reset Tileboard to no Product. 
     */
    it("should reset to no product", () => {
        fetchMock.post('https://api.pub.worximity.net/v1.0/contexts', 202); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            let request = fetchMock.lastOptions('https://api.pub.worximity.net/v1.0/contexts');
            expect(request.body.contexts[0].production_unit_id).to.equal("pu-3asdas-1b324a75");
            expect(request.body.contexts[0].sku).to.be.null;
            expect(request.body.contexts[0].datetime).to.equal("2018-12-05T13:59:40.123Z");
        }

        let productChange = {
            "contexts": [{
                "production_unit_id": "pu-3asdas-1b324a75",
                "sku": null,
                "datetime": "2018-12-05T13:59:40.123Z"
            }]
        }
        return changeContextService.changeContext('mytoken', productChange).then(assertions);
    });

});


