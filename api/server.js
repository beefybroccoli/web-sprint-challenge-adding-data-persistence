const express = require("express");
const server = express();
const routerProjects = require("./project/router");
const routerResources = require("./resource/router");
const routerTasks = require("./task/router");

server.use(express.json());
server.use(express.Router());

server.get("/", (req, res)=>{
    res.status(200).json({message:"hello from server"});
})

server.use("/api/projects", routerProjects);
server.use("/api/resources", routerResources);
server.use("/api/tasks", routerTasks);

module.exports = server;