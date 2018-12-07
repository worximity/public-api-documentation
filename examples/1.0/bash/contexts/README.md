# Manage Context

This Section show example on how to change programmaticly the context of a production unit.

## Header and Originate Timestamp Field  

As show in this sample, the request should have the following headers:

* The worximity token set in the Authorization Header as a Bearer token
* The Content-Type header set to `application/json`

The payload should also contain the field originate_datetime that should be set just before sending the request.  That datetime is use by worximity to normalize time between the different device that interact with the production unit.

```bash
#/bin/bash

export WXTOKEN=<insert_token_here>


generateContext()
{
  cat <<EOF
{
    "contexts": [{
        "production_unit_id": "pu-3asdas-1b324a75",
        "sku": "A1230",
        "datetime": "2018-12-05T12:59:40.123Z"
    }],
    "originate_datetime": "$current_time"
}
EOF
}

current_time=`date -u +"%Y-%m-%dT%H:%M:%SZ"`

curl --data  "$(generateContext)" -H "Authorization: Bearer $WXTOKEN" -H "Content-Type: application/json" https://api.pub.worximity.net/v1.0/contexts
```

## Product Context

See [Product Context](context_product_change.md)

## Work Order Context

See [Product Context](context_workorder_change.md)


## Phase Context

Upcomming
