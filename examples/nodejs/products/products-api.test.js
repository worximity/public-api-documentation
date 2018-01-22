'use strict';

const fetchMock = require('fetch-mock');
const expect = require("chai").expect;
const productLoader = require("./products-api")()

describe("The products API fetcher", () => {

    beforeEach(() => {
        fetchMock.restore()
    });


    it("should retreive a list of all products", () => {
        fetchMock.get('https://api.pub.worximity.net/products', MockedResponse); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            expect(result).to.deep.equal(MockedResponse);

            let request = fetchMock.lastOptions('https://api.pub.worximity.net/products');

            expect(request.method).to.equal("GET");
            expect(request.headers["User-Agent"]).to.not.be.undefined;
            expect(request.headers["Authorization"]).to.equal("Bearer mytoken");
        }

        return productLoader.load('mytoken').then(assertions);
    });



    it("should delete products", () => {
        fetchMock.delete('https://api.pub.worximity.net/products', 202); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            expect(result).to.be.undefined;

            let request = fetchMock.lastOptions('https://api.pub.worximity.net/products');

            expect(request.method).to.equal("DELETE");
            expect(request.headers["User-Agent"]).to.not.be.undefined;
            expect(request.headers["Authorization"]).to.equal("Bearer mytoken");
            expect(request.body).to.deep.equal(DeleteProducts);
        }

        return productLoader.delete('mytoken', DeleteProducts).then(assertions);
    });



    it("should save products", () => {
        fetchMock.post('https://api.pub.worximity.net/products', 202); // Setup fetch-mock to replace actual remote call

        let assertions = function (result) {
            expect(result).to.be.undefined;

            let request = fetchMock.lastOptions('https://api.pub.worximity.net/products');

            expect(request.method).to.equal("POST");
            expect(request.headers["User-Agent"]).to.not.be.undefined;
            expect(request.headers["Authorization"]).to.equal("Bearer mytoken");
            expect(request.body).to.deep.equal(ProductList);
        }

        return productLoader.save('mytoken', ProductList).then(assertions);
    });

});

const DeleteProducts = [
    {
        "code": "A1",
        "line_id": "1A"
    }
]


const ProductList = [
    {
        "code": "A1230",
        "description": "Raspberries 450g",
        "line_id": "1A",
        "category_name": "Vrac",
        "exclude_data": true,
        "output_multiplier": 3
    },
    {
        "code": "A1231",
        "description": "Strawberry 450g",
        "line_id": "1A",
        "category_name": "Vrac",
        "exclude_data": false,
        "output_multiplier": 4
    }
]


const MockedResponse = [
    {
        "code": "A1230",
        "description": "Strawberry 450g",
        "line_id": "1A",
        "category_name": "Vrac",
        "exclude_data": true,
        "output_multiplier": 3
    }
];