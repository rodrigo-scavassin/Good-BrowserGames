import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://gbg_admin:gbg@good-browser-games.f6cym.mongodb.net/good-browser-games"
);

let db = mongoose.connection;

export default db;
