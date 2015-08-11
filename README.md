# branch
A CLI tool that allows for manipulation of git branches

## Installation

    > npm install -g branch-cli

## Usage

### Status
In your command line prompt, if you type

    > branch

It will display the current branch status, including branch name and files to be committed.

### Delete
In your command line prompt, if you type

    > branch delete

A list of branches will display, excluding the one you are currently on. An example is as such:

    > ? Please select the branches you wish to delete:  (Press <space> to select)
      ❯◯ master
       ◯ develop
       ◯ branchNotBeingUsed

By pressing [Space], you can select or deselect branches. Then press [Enter] to delete branches.

## Versions
**1.0.0**
* First working version

