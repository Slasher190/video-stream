const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/video"); 
const PORT = process.env.PORT || 3000; 

app.use(cors());

app.use("/api/videos", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
