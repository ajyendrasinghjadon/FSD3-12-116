# Express
Fast, unopinionated, minimalist and framework for Node.js

## Steps
1. Create project folder (lab5)
2. Create 2 folders {frontend, backend} in root (lab5)
3. Open terminal and reach to backend.
4. Type "npm init -y"
5. Install nodemon "npm i nodemon -D"
6. Install express "npm i express"
7. Update backend/package.json
    - Change type 'type: "module"'
    - Change script 
        ```
        script: {
            "start": "node app.js",
            "dev": "nodemon prg1.js"
        }
        ```
8. Add "lab5/backend/node_modules" to git.ignore
9. Create "prg1.js" in backend.
10. Write the script below to start express server
    ```
    import express from 'express';
    const app = express();
    const PORT = 3000;

    app.get("/", (req,res) => {
        res.send("Hello from prg1");
    })

    app.listen(PORT, () => console.log(`prg1 is running on port ${PORT}`));
    ```
11. In express we can add any static html pages with the help of express.static link
12. express supports middleware, when we have to execute some functions before server execution then we use middleware. App.use always appply insert any middleware.