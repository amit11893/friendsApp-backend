const app = require("../../app");
const cors = require("cors");
const {sequelize}= require('../../models');

const corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

sequelize.sync({
    // logging: console.log
}).then(() => {
    console.log('connection to database established successfully');
    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log(`server listening on ${port}...`));
}).catch(err => {
    console.error(err);
})

