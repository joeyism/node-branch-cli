"use strict";
var q = require("q");
var git = require("git-lib");
require("colors");

module.exports = function(){
    var deferred = q.defer();
    git.getCurrentBranch().then(function(branch){

        console.log("You are currently in branch: " + branch.green + "\n");
        return git.getFilesCached();

    }).then(function(files){

        if (files){
            console.log("These are the files you have modified, but have not been added: ");
            files.forEach(function(file){
                console.log("  - ".yellow + file.cyan);
            });
            console.log('');
        }
        deferred.resolve();

    }).catch(function(err){
    
        deferred.reject(err);

    });

    return deferred.promise;
};
