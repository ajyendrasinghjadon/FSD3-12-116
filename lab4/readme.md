# NPM Project
1. goto project folder [by cd]
2. type ```npm init -y```
3. open package.json
4. update `type: module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json

```
script {
    "start": "node app.js"
    "dev": "nodemon prg7.js"
} 
```
7. add node_modules to .gitignore
8. to run use `npm run dev`

## REST API
### Representational State Transfer (REST)
- majorly backend server return only data not html file.
- REST API uses (get, post, put, delete, patch) method to communicate.
- any browser can check only get method.
- for other type we use third party API Tester like postmna, thunder client, echo api, etc.

## Request Type: 
1. GET -> Get all (URL: http://localhost:3000/api/users) and get by ID (URL: http://localhost:3000/api/users/101)
2. POST-> (URL: http://localhost:3000/api/users) Data is sent by this method.
3. DELETE -> (URL: http://localhost:3000/api/users) Data is deleted by this method