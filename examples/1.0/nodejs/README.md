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

  3 passing (14ms)
```
