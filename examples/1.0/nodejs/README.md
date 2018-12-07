# Running the example

The example found in `load-products.js` loads products from the api and returns them. It uses native fetch and returns a promise.

To run the unit test that executes the load products method:

```
git clone git@github.com:worximity/public-api-documentation.git
cd public-api-documentation/examples/nodejs
npm install
npm test
```

_Note_: The unit tests use `fetch-mock` to avoid using live data and return a known mocked value.

Running the test should display something like the following:

```
╰─$ npm test

> public-api-examples@0.0.0 product-tests ~/public-api-documentation/examples/nodejs
> mocha --opts mocha.opts

 The products API fetcher
    ✓ should save products

  The Context API
    ✓ should provide the Proper Header and The Originate Timestamp to context request
    ✓ should allow sending multiple contexts in case of connection outage

  The Product Context API
    ✓ should change current product
    ✓ should reset to no product

  The Work Order Context API
    ✓ should change current Work Order
    ✓ should reset to no work order
    ✓ should change current work order with a new product selection
    ✓ should reset to no work order and no product
    ✓ should change current work order with a new product selection and a planned quantity
    ✓ should reset to no work order and no product and reset the planned quantity


  11 passing (22ms)
```
