const path = require("path");

const express = require("express");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const csrf = require('csurf');

const expressSession = require('express-session');
const createSessionConfig = require('./config/session');

const db = require('./data/database');
const errorHandlerMiddleware = require('./middlewares/csrf-handler');
const addCsrfTokenMiddleware = require('./middlewares/scrf-token');
const checkAuthStatusMiddleware = require('./middlewares/check-auth');
const protectRoutesMiddleware = require('./middlewares/protect-routes');

const cartMiddleware = require('./middlewares/cart');
const updateCartPricesMiddleware = require('./middlewares/update-cart-prices');
const notFoundMiddleware = require('./middlewares/not-found');
const authRoutes = require("./routes/auth.routes");

const productsRoutes = require('./routes/products.routes');
const baseRoutes = require('./routes/base.routes');
const adminRoutes = require('.routes/admin.routes');
const cartRoutes = require('./routes/cart.routes');
const ordersRoutes = require('.routes/orders.routes');

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.use('/product' ,express.static('product-data'));

app.use(express.urlencoded({extended: false }));
app.use(express.json())

const sessionConfig = createSessionconfig();

app.use(expressSession(sessionConfig));
app.use(csurf());

app.use(cartMiddleware);
app.use(updateCartPricesMiddleware);

app.use(addCsrfTokenMiddleware);
app.use(checkAuthStatusMiddleware);

app.use(authRoutes);
app.use(baseRoutes);
app.use(productsRoutes);
app.use('/cart',cartRoutes);

app.use('/orders',protectRoutesMiddleware,  ordersRoutes);
app.use('/admin' ,protectRoutesMiddleware, adminRoutes);

app.use(notFoundMiddleware);





app.use(errorHandlerMiddleware);


db.connectToDatabase().then(function (){
  app.listen(3000);
}).catch(function(error){
  console.log('failed to connect to the database!');
  console.log(error);
});

app.listen(3000);
