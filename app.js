import express from "express"
import bodyParser from "body-parser"
import path from "path"
import routes from "./routes/index.js"
import db from "./config/dbConnect.js"
import { fileURLToPath } from 'url'
import methodOverride from 'method-override'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import cookieParser from "cookie-parser"

dotenv.config()
const cryptography = bcrypt
const jwt = jsonwebtoken

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('content'));
app.use(methodOverride('_method'));
app.use(jsonParser);
app.use(urlencodedParser)
app.use(cookieParser())

app.set("port", process.env.PORT || 3000);

app.set('views', path.join(__dirname,'views'));
app.set("view engine", "ejs");


app.listen(app.get("port"),function(){
    console.log("Server started at port " + app.get("port"));
});


db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});


routes(app);

export default app;
