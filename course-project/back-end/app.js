const express = require('express');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();

app.use(placesRoutes);
app.use(usersRoutes);

app.listen(5000);
