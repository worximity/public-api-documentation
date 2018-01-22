Follows are examples showing how to use Worximity APIs through bash.

## Using curl

### Getting information

```
$ export WXTOKEN=insert_token_here
$ curl -H "Authorization: Bearer $WXTOKEN" -H "Content-Type: application/json" https://api.pub.worxity.net/products
```


### Posting information

```
$ export WXTOKEN=insert_token_here
$ curl -d @myfilename -H "Authorization: Bearer $WXTOKEN" -H "Content-Type: application/json" https://api.pub.worxity.net/products
```

Where `myfilename` points to a file that contains information to POST. For example, for products:
```
[
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
```

