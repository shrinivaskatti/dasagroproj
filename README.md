# dasagroproj
Initial repo for testing node js inerfaces with current java APIs. May turn into actual repo for the project. Who knows ;) 

As of now, the shop.js file under routes/ has products hardcoded to a single pump product.
We are supposed to do 2 things before the node js project starts showing data from the java workspace.

We are reading the products from req body (which is json).
Hence, in routes/shop.js, at line 7, instead of hardcoded value, just add `products = req.body.products;`

Now, send the request at localhost:3000/ from the java project.

If this looks tedious, try using postman instead.
