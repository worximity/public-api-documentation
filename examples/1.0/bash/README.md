Follows are examples showing how to use Worximity APIs through bash.

## Using curl


### Posting information

```
$ export WXTOKEN=insert_token_here
$ curl -d @myfilename -H "Authorization: Bearer $WXTOKEN" -H "Content-Type: application/json" https://api.pub.worxity.net/v1.0/products/batch
```

Where `myfilename` points to a file that contains information to POST. For example, for products:
```
{
    "data": [{
            "sku": "A1230",
            "description": "Strawberry 450g",
            "production_unit_id": "1A",
            "category_name": "Vrac",
            "exclude": true,
            "multipliers":[{
                "type": "IN"
                "multiplier": 2
            },
            {
                "type": "OUT"
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
};
```

