'use strict';

const fetchMock = require('fetch-mock');
const expect = require("chai").expect;
const changeContextService = require("./context-api")()
const moment = require("moment");

describe("The Work Order Context API", () => {

    beforeEach(() => {
        fetchMock.restore()
    });


    /**
     * This test illustrate how to only change a Work Order while letting Tileboard apply the other information. 
     * This will tag the work order to all Tileboard Production until the work order is change.
     */
    it("should change current Work Order", () => {
        fetchMock.post('https://api.pub.worximity.net/v1.0/contexts', 202); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            let request = fetchMock.lastOptions('https://api.pub.worximity.net/v1.0/contexts');
            expect(request.body.contexts[0].production_unit_id).to.equal("pu-3asdas-1b324a75");
            expect(request.body.contexts[0].work_order).to.equal("wo-1234");
            expect(request.body.contexts[0].datetime).to.equal("2018-12-05T12:59:40.123Z");
        }

        let productChange = {
            "contexts": [{
                "production_unit_id": "pu-3asdas-1b324a75",
                "work_order": "wo-1234",
                "datetime": "2018-12-05T12:59:40.123Z"
            }]
        }
        return changeContextService.changeContext('mytoken', productChange).then(assertions);
    });

     /**
     * This test illustrate how to reset the work order in Tileboard. 
     */
    it("should reset to no work order", () => {
        fetchMock.post('https://api.pub.worximity.net/v1.0/contexts', 202); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            let request = fetchMock.lastOptions('https://api.pub.worximity.net/v1.0/contexts');
            expect(request.body.contexts[0].production_unit_id).to.equal("pu-3asdas-1b324a75");
            expect(request.body.contexts[0].work_order).to.be.null;
            expect(request.body.contexts[0].datetime).to.equal("2018-12-05T13:59:40.123Z");
        }

        let productChange = {
            "contexts": [{
                "production_unit_id": "pu-3asdas-1b324a75",
                "work_order": null,
                "datetime": "2018-12-05T13:59:40.123Z"
            }]
        }
        return changeContextService.changeContext('mytoken', productChange).then(assertions);
    });


      /**
     * This test illustrate how to only associate a work order to a product while letting Tileboard apply the other information. 
     * This will change the product in Tileboard but will also tag the production with the work order.
     */
    it("should change current work order with a new product selection", () => {
        fetchMock.post('https://api.pub.worximity.net/v1.0/contexts', 202); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            let request = fetchMock.lastOptions('https://api.pub.worximity.net/v1.0/contexts');
            expect(request.body.contexts[0].production_unit_id).to.equal("pu-3asdas-1b324a75");
            expect(request.body.contexts[0].work_order).to.equal("wo-1234");
            expect(request.body.contexts[0].sku).to.equal("ABCD");
            expect(request.body.contexts[0].datetime).to.equal("2018-12-05T12:59:40.123Z");
        }

        let productChange = {
            "contexts": [{
                "production_unit_id": "pu-3asdas-1b324a75",
                "work_order": "wo-1234",
                "sku": "ABCD",                
                "datetime": "2018-12-05T12:59:40.123Z"
            }]
        }
        return changeContextService.changeContext('mytoken', productChange).then(assertions);
    });


     /**
     * This test illustrate how to reset the work order in Tileboard. 
     */
    it("should reset to no work order and no product", () => {
        fetchMock.post('https://api.pub.worximity.net/v1.0/contexts', 202); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            let request = fetchMock.lastOptions('https://api.pub.worximity.net/v1.0/contexts');
            expect(request.body.contexts[0].production_unit_id).to.equal("pu-3asdas-1b324a75");
            expect(request.body.contexts[0].work_order).to.be.null;
            expect(request.body.contexts[0].sku).to.be.null;
            expect(request.body.contexts[0].datetime).to.equal("2018-12-05T13:59:40.123Z");
        }

        let productChange = {
            "contexts": [{
                "production_unit_id": "pu-3asdas-1b324a75",
                "work_order": null,
                "sku": null,
                "datetime": "2018-12-05T13:59:40.123Z"
            }]
        }
        return changeContextService.changeContext('mytoken', productChange).then(assertions);
    });


    it("should change current work order with a new product selection and a planned quantity", () => {
        fetchMock.post('https://api.pub.worximity.net/v1.0/contexts', 202); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            let request = fetchMock.lastOptions('https://api.pub.worximity.net/v1.0/contexts');
            expect(request.body.contexts[0].production_unit_id).to.equal("pu-3asdas-1b324a75");
            expect(request.body.contexts[0].work_order).to.equal("wo-1234");
            expect(request.body.contexts[0].sku).to.equal("ABCD");
            expect(request.body.contexts[0].sku_quantity).to.equal(1000);
            expect(request.body.contexts[0].datetime).to.equal("2018-12-05T12:59:40.123Z");
        }

        let productChange = {
            "contexts": [{
                "production_unit_id": "pu-3asdas-1b324a75",
                "work_order": "wo-1234",
                "sku": "ABCD",    
                "sku_quantity": 1000,                
                "datetime": "2018-12-05T12:59:40.123Z"
            }]
        }
        return changeContextService.changeContext('mytoken', productChange).then(assertions);
    });

    it("should reset to no work order and no product and reset the planned quantity", () => {
        fetchMock.post('https://api.pub.worximity.net/v1.0/contexts', 202); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            let request = fetchMock.lastOptions('https://api.pub.worximity.net/v1.0/contexts');
            expect(request.body.contexts[0].production_unit_id).to.equal("pu-3asdas-1b324a75");
            expect(request.body.contexts[0].work_order).to.be.null;
            expect(request.body.contexts[0].sku).to.be.null;
            expect(request.body.contexts[0].datetime).to.equal("2018-12-05T13:59:40.123Z");
        }

        // Changing the Product will reset the sku_quantity field.
        let productChange = {
            "contexts": [{
                "production_unit_id": "pu-3asdas-1b324a75",
                "work_order": null,
                "sku": null,
                "datetime": "2018-12-05T13:59:40.123Z"
            }]
        }
        return changeContextService.changeContext('mytoken', productChange).then(assertions);
    });

});


