Follows are examples showing how to use Worximity APIs through bash.

## Using curl

### Getting information

```
$ export WXTOKEN=insert_token_here
$ curl -H "Authorization: Bearer $WXTOKEN" -H "Content-Type: application/json" https://api.pub.worximity.net/products
```


### Posting information

```
$ export WXTOKEN=insert_token_here
$ curl -d @myfilename -H "Authorization: Bearer $WXTOKEN" -H "Content-Type: application/json" https://api.pub.worximity.net/products
```

Where `myfilename` points to a file that contains information to POST. For example, for products:
```
{
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
```

