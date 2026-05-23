// Dependencies
import express from "express";
import router from "./routes/gpus.js";

// Server
const app = express();
app.use(express.json());
app.use("/api", router);
app.use("/images", express.static("public/images"));

// Serve the frontend production build
app.use(express.static("dist"));

const port = 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
