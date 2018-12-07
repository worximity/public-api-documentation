# Manage Products

This Section show example on how to manage the product list of your production units.

## Adding new Products  

```bash
#/bin/bash

export WXTOKEN=<insert_token_here>

generateProductList()
{
  cat <<EOF
{
    "data": [{
            "sku": "A1230",
            "description": "Strawberry 450g",
            "production_unit_id": "1A",
            "category_name": "Vrac",
            "exclude": true,
            "multipliers":[{
                "type": "IN",
                "multiplier": 2
            },
            {
                "type": "OUT",
                "multiplier": 10
            }],
            "tooling_kit": "string",
            "objectives": [{
                "type": "SPEED",
                "value": 150,
                "start_date": "2018-01-01"
            }]
        },
        {
            "sku": "A1231",
            "description": "Strawberry 900g",
            "production_unit_id": "1A",
            "category_name": "Vrac",
            "exclude": false,
            "multipliers":[{
                "type": "IN",
                "multiplier": 4
            },
            {
                "type": "OUT",
                "multiplier": 15
            }],
            "tooling_kit": "string",
            "objectives": [{
                "type": "SPEED",
                "value": 150,
                "start_date": "2018-01-01"
            }]
        }
    ],
    "mode": "APPEND"
}
EOF
}

curl --data "$(generateProductList)" -H "Authorization: Bearer $WXTOKEN" -H "Content-Type: application/json" https://api.pub.worximity.net/v1.0/products/batch
```

## Replace All Products on a production unit

```bash
#/bin/bash

export WXTOKEN=<insert_token_here>

generateProductList()
{
  cat <<EOF
{
    "data": [{
            "sku": "A1230",
            "description": "Strawberry 450g",
            "production_unit_id": "1A",
            "category_name": "Vrac",
            "exclude": true,
            "multipliers":[{
                "type": "IN",
                "multiplier": 2
            },
            {
                "type": "OUT",
                "multiplier": 10
            }],
            "tooling_kit": "string",
            "objectives": [{
                "type": "SPEED",
                "value": 150,
                "start_date": "2018-01-01"
            }]
        },
        {
            "sku": "A1231",
            "description": "Strawberry 900g",
            "production_unit_id": "1A",
            "category_name": "Vrac",
            "exclude": false,
            "multipliers":[{
                "type": "IN",
                "multiplier": 4
            },
            {
                "type": "OUT",
                "multiplier": 15
            }],
            "tooling_kit": "string",
            "objectives": [{
                "type": "SPEED",
                "value": 150,
                "start_date": "2018-01-01"
            }]
        }
    ],
    "mode": "OVERWRITE"
}
EOF
}

curl --data "$(generateProductList)" -H "Authorization: Bearer $WXTOKEN" -H "Content-Type: application/json" https://api.pub.worximity.net/v1.0/products/batch
```
