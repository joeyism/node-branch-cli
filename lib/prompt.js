"use strict";
var inq = require("inquirer");
var q = require("q");

var deletion = function(branchesToShow){

    var deferred = q.defer();

    var question = [{
        type: "checkbox",
        message: "Please select the branches you wish to delete: ",
        choices: branchesToShow,
        name: "branchesToDelete"
    }];

    inq.prompt(question, function(answer){
        deferred.resolve(answer.branchesToDelete);
    });
    
    return deferred.promise; 

};


module.exports = {
    deletion: deletion
}; 
