"use strict";
var prompt = require("./prompt");
var git = require("git-lib");
var q = require("q");
require("colors");
require("xcept");

var emptyPromise = function(){
    var deferred = q.defer();
    q.resolve();
    return deferred.promise;
};

var deleteBranch = function(){
    
    var deferred = q.defer();
    var currentBranch;

    git.getCurrentBranch().then(function(result){

        currentBranch = result;
        return git.getBranches.local();
    
    }).then(function(branches){
    
        return prompt.deletion(branches.omit(currentBranch));
    
    }).then(function(branchesToDelete){
    
        git.deleteBranches(branchesToDelete);
    
    }).then(function(result){
    
        console.log("The following branches were successfully deleted: ");
        result.success.forEach(function(branch){
            console.log("  - ".yellow + branch.green);
        });
        console.log("");
        console.log("The following branches failed to be deleted: ");
        result.failure.forEach(function(branch){
            console.log("  - ".yellow + branch.red);
        });
        console.log("");

        deferred.resolve();
    
    }).catch(function(err){
    
        deferred.reject(err);
    
    });

    return deferred.promise;

};


module.exports = function(instruct){
    
    if(instruct === "delete"){
        return deleteBranch();
    }
    else if (instruct === "new"){
        return newBranch();
    }
    else{
        return emptyPromise();
    }
};
