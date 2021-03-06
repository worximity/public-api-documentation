'use strict';

const fetchMock = require('fetch-mock');
const expect = require("chai").expect;
const productLoader = require("./products-api")()

describe("The products API fetcher", () => {

    beforeEach(() => {
        fetchMock.restore()
    });



    it("should save products", () => {
        fetchMock.post('https://api.pub.worximity.net/products/batch', 202); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            expect(result).to.be.undefined;

            let request = fetchMock.lastOptions('https://api.pub.worximity.net/products/batch');

            expect(request.method).to.equal("POST");
            expect(request.headers["User-Agent"]).to.not.be.undefined;
            expect(request.headers["Authorization"]).to.equal("Bearer mytoken");
            expect(request.body).to.deep.equal(ProductList);
        }

        return productLoader.save('mytoken', ProductList).then(assertions);
    });

});




const ProductList = {
    "data": [{
            "code": "A1230",
            "description": "Strawberry 450g",
            "production_unit_id": "1A",
            "category_name": "Vrac",
            "exclude": true,
            "output_multiplier": 4,
            "tooling_kit": "string",
            "objectives": [{
                "type": "SPEED",
                "value": 150,
                "start_date": "2018-01-01"
            }]
        },
        {
            "code": "A1231",
            "description": "Strawberry 900g",
            "production_unit_id": "1A",
            "category_name": "Vrac",
            "exclude": false,
            "output_multiplier": 2,
            "tooling_kit": "string",
            "objectives": [{
                "type": "SPEED",
                "value": 150,
                "start_date": "2018-01-01"
            }]
        }
    ],
    "mode": "APPEND"
};