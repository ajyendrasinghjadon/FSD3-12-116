import express from 'express';
import path from 'path';
import { fileURLToPath } from "node:url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(dirname, "pages", "product.html"));
})

app.use((req, res) => {
    res.status(404).sendFile("<h1>Page Not Found</h1>");
})
app.listen(4000, () => console.log("Server is running on port 4000"));
