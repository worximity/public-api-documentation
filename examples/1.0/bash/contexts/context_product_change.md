# Change Product Context on a Production Unit

## Start a new product or change current product

This test illustrate how to only change a Product while letting Tileboard apply the other information. This will be the same behavior as changing a product manually through the Tileboard App.

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

## Terminate product on the production unit

This test illustrate how to reset Tileboard to no Product.

```bash
#/bin/bash

export WXTOKEN=<insert_token_here>


generateContext()
{
  cat <<EOF
{
    "contexts": [{
        "production_unit_id": "pu-3asdas-1b324a75",
        "sku": "",
        "datetime": "2018-12-05T12:59:40.123Z"
    }],
    "originate_datetime": "$current_time"
}
EOF
}

current_time=`date -u +"%Y-%m-%dT%H:%M:%SZ"`

curl --data  "$(generateContext)" -H "Authorization: Bearer $WXTOKEN" -H "Content-Type: application/json" https://api.pub.worximity.net/v1.0/contexts
```