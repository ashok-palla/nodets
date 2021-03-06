
import * as express from "express";
import * as bodyParser from "body-parser";
import * as apiController from "./controllers/api";
const app: any = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import * as swaggerUi from "swagger-ui-express";
var swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(apiController.globalApiHandler);
app.get("/", apiController.login);
app.get("/check", apiController.check);
app.post("/login", apiController.login);

app.get("/city", apiController.city_get);
app.put("/city", apiController.CITY_INSERT);
app.post("/city", apiController.CITY_GET);
app.delete("/city", apiController.CITY_DELETE);

app.get("/employee/", apiController.EMPLOYEE_GET);
app.get("/employee/?:id", apiController.EMPLOYEE_GET);

module.exports = app;