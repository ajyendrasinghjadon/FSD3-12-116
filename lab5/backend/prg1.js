import express from 'express';
const app = express();
const PORT = 3000;

app.get("/", (req,res) => {
    // res.send("Hello from prg1");
    // res.send("<h1>Hello from prg1</h1>");
    res.send(`
        <h1>Hello Server</h1>
        <h2>I am responding from express framework</h2>
        <h3>The code is minimal and easy to return</h3>
    `)
})

app.get("/about", (req, res) => {
    res.send(`<h2>About Page</h2>`)
})

app.get("/products", (req, res) => {

        const products = {
            id: 1,
            name: "Mobile",
            price: 25000,
        };
        res.send(products);
})

// This line must be last line
app.listen(PORT, () => console.log(`prg1 is running on port ${PORT}`));