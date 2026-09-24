import http from "http";
import { addUser, getAllUsers, getUserById, updateUser, deleteUser } from "./users.js";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <head>
                    <title>My Node Server</title>
                </head>
                <body>
                    <h1>Hello from Node.js!</h1>
                    <p>My server is working successfully.</p>
                    <p>This page is being served from port 2000.</p>
                </body>
            </html>
        `);
  } else if (req.url === "/api/users" && req.method === "GET") {
    const users = getAllUsers();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } 
  
  else if (req.url === "/api/users/" && req.method === "GET") {
    const userId = Number(req.url.split("/").pop());
    const user = getUserById(userId);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } 
  
  else if (req.url === "/api/users" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const user = JSON.parse(body);
      const userCreated = addUser(user);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          msg: "user added",
          userCreated,
        }),
      );
    });
  } 
  
  else if (req.url.startsWith("/api/users/") && req.method === "PUT") {
    res.end(
      JSON.stringify({
        msg: "update user",
      }),
    );
  } 
  
  else if (req.url.startsWith("/api/users/") && req.method === "DELETE") {
    res.end(
      JSON.stringify({
        msg: "remove user",
      }),
    );
  } 
  
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        msg: "Route not found",
      }),
    );
  }
});

server.listen(2000, () => {
  console.log("Server is running on port 2000");
});
