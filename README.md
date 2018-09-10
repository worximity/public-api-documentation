
## Detailed API documentation

https://developer.tileboard.ca/docs/v1.0/

## General information

* All API operations are made over `https` on the `api.pub.worximiy.net` domain. 
* Data is sent and received as JSON. 
* All dates and times are in ISO8601 format.  Timezone information should always be included.
* If applicable, rate limiting information is returned in the `X-RateLimit-Limit` and `X-RateLimit-Remaining` response headers.
* [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) headers are used and should be leveraged if possible.


## Authentication

Authentication is done through a bearer token added to the `Authorization` request header. 

For example, using `curl` to get a list of products: 
    
    curl -X POST --header 'Authorization: Bearer MYTOKEN' 'https://api.pub.worximity.net/products/batch'                    


All requests should include the header and token.

#### Getting a token

Obtaining a token is done by contacting Worximity support.


## User Agent

Requests should include a user agent header. This allows us to contact you if there are problems.

For example:

    curl -X POST --header 'User-Agent: Worximity-ProductAPIConsumer' --header 'Authorization: Bearer MYTOKEN' https://api.pub.worximity.net/products/batch

## Status Codes

Success codes:

* `200` : Ok; the response contains a payload
* `202` : The request was accepted but not processed. Specifically, this means that it may take some time before the requested changes appear.

Error codes:
* `400` : The request was invalid (invalid payload)
* `401` : No authentication information found in the request
* `403` : A token was found in the Authorization header, but was rejected


## Usage examples

* [NodeJS](examples/nodejs)
* [Bash](examples/bash)
    


