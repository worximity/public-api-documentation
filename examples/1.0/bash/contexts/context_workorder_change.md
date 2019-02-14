# Change WorkOrder and Product Context on a Production Unit

## Start a new work order or change the current work order only

This test illustrate how to only change a Work Order while letting Tileboard apply the other information.

```bash
#/bin/bash

export WXTOKEN=<insert_token_here>


generateContext()
{
  cat <<EOF
{
    "contexts": [{
        "production_unit_id": "pu-3asdas-1b324a75",
        "work_order": "wo-1234",
        "datetime": "2018-12-05T12:59:40.123Z"
    }],
    "originate_datetime": "$current_time"
}
EOF
}

current_time=`date -u +"%Y-%m-%dT%H:%M:%SZ"`

curl  --data  "$(generateContext)" -H "Authorization: Bearer $WXTOKEN" -H "Content-Type: application/json" https://api.pub.worximity.net/v1.0/contexts
```

## Terminate Work Order

This test illustrate how to terminate a work order.

```bash
#/bin/bash

export WXTOKEN=<insert_token_here>


generateContext()
{
  cat <<EOF
{
    "contexts": [{
        "production_unit_id": "pu-3asdas-1b324a75",
        "work_order": "",
        "datetime": "2018-12-05T12:59:40.123Z"
    }],
    "originate_datetime": "$current_time"
}
EOF
}

current_time=`date -u +"%Y-%m-%dT%H:%M:%SZ"`

curl --data  "$(generateContext)" -H "Authorization: Bearer $WXTOKEN" -H "Content-Type: application/json" https://api.pub.worximity.net/v1.0/contexts
```

## Start a new work order or change the current work with a new product

```bash
#/bin/bash

export WXTOKEN=<insert_token_here>


generateContext()
{
  cat <<EOF
{
    "contexts": [{
        "production_unit_id": "pu-3asdas-1b324a75",
        "work_order": "wo-1234",
        "sku": "product-abcd",
        "datetime": "2018-12-05T12:59:40.123Z"
    }],
    "originate_datetime": "$current_time"
}
EOF
}

current_time=`date -u +"%Y-%m-%dT%H:%M:%SZ"`

curl  --data  "$(generateContext)" -H "Authorization: Bearer $WXTOKEN" -H "Content-Type: application/json" https://api.pub.worximity.net/v1.0/contexts
```

## Terminate Work Order and Terminate the Product

This test illustrate how to terminate the product and a work order at the same time.

```bash
#/bin/bash

export WXTOKEN=<insert_token_here>


generateContext()
{
  cat <<EOF
{
    "contexts": [{
        "production_unit_id": "pu-3asdas-1b324a75",
        "work_order": "",
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

## Start a new work order with a new product and with a planned quantity

```bash
#/bin/bash

export WXTOKEN=<insert_token_here>


generateContext()
{
  cat <<EOF
{
    "contexts": [{
        "production_unit_id": "pu-3asdas-1b324a75",
        "work_order": "wo-1234",
        "sku": "product-abcd",
        "sku_quantity": 1000,
        "datetime": "2018-12-05T12:59:40.123Z"
    }],
    "originate_datetime": "$current_time"
}
EOF
}

current_time=`date -u +"%Y-%m-%dT%H:%M:%SZ"`

curl  --data  "$(generateContext)" -H "Authorization: Bearer $WXTOKEN" -H "Content-Type: application/json" https://api.pub.worximity.net/v1.0/contexts
```