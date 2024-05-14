import app from "./app";
import dotenv from "dotenv";
import { getDbClient } from "./backend/db/index";

dotenv.config();
getDbClient()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Application is running at Port:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database Connection Error:", err);
  });
const PORT = process.env.PORT || 8000;
