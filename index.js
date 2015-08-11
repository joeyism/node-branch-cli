#!/usr/bin/env node
"use strict";
var git = require("git-lib");
var command = require("./lib/command");
var showBranchAndFiles = require("./lib/showBranchAndFiles");
var params = process.argv;
var instruct = params[2];
require("colors");

git.isGit().then(function(){

    return showBranchAndFiles()

}).then(function(){

    command(instruct.toLowerCase());

}).catch(function(err){

    console.log(err.toString().red);

});
