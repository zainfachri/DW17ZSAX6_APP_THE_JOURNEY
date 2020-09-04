const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;
const router = require("./routes/route");
const bodyParser = require("body-parser");

const multiparty = require("connect-multiparty");

require("dotenv").config();

const MultipartyMiddleware = multiparty({ uploadDir: "./uploads" });
const morgan = require("morgan");

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

app.post("/uploads", MultipartyMiddleware, (req, res) => {
  console.log(req.files.upload);
});

app.use("/uploads", express.static("uploads"));
app.use("/api/v1", router);

app.listen(port, () => console.log(`Listening on port ${port}`));
