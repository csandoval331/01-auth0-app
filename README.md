# Curl commands to test webapp endpoints
```
 curl -X GET http://server_ip_addr/
 
 curl -X POST -H "Content-Type: application/json" -d '{"msg": "my-message"}' http://server-ip-addr/my-message
```

# Inspecting Express Cookies
[
    {
        "name": "connect.sid",
        "value": "s%3AQtqhsL7SFIA1syiqulNHV4fosP_ysPv4.0mUeEzgS0x8RLOxaOwwyXrKJkfvjAWDJo1%2BFpRhLWUM",
        "domain": "10.0.0.55",
        "hostOnly": true,
        "path": "/",
        "secure": false,
        "httpOnly": true,
        "sameSite": "no_restriction",
        "session": true,
        "firstPartyDomain": "",
        "partitionKey": null,
        "storeId": null
    }
]

# Notes
- [Youtube tutorial by WebDevSimplified](https://youtu.be/-RCnNyD0L-s)
- [Another youtube vid about passport-local](https://www.youtube.com/watch?v=_lZUq39FGv0)
- [Example of passport-local login from github](https://github.com/passport/todos-express-password)
- [Next Youtube project -  Passing Data Between Frontend and Backend | Node.js ](https://www.youtube.com/watch?v=5TxF9PQaq4U)
- [The Express API documentation - should read!](https://expressjs.com/en/4x/api.html)
- [Understanding purpose of package-lock.json](https://stackoverflow.com/questions/44297803/what-is-the-role-of-the-package-lock-json)
- [ran into issue with using req.logOut() and solution](https://stackoverflow.com/questions/72336177/error-reqlogout-requires-a-callback-function)