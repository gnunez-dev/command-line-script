#!/usr/bin/env node

"use strict"

const args = require("minimist")(process.argv.slice(2),{
  boolean: ["help"],
  string: ["name"]
})

function hello(){
  console.log('Hi, this is a command line script test')
  console.log('------------------------------------------')
  console.log('You can use de parameters name and help')
  console.log('Ex: --name=Glaudys')
  console.log('------------------------------------------')
}

function greeting(){
  console.log('****************************************')
  console.log(`Hellooo ${args.name}, have a good day`)
  console.log('****************************************')
}

if(args.name){
  greeting()
} else {
  hello()
}
