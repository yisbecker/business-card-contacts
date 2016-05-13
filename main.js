"use strict";

const fs = require("fs");
const nlp = require("nlp_compromise");
const IContactInfo = require("./contactInfo.js");

main();

function main(){
  bcardToContact("input/bcard1");
  bcardToContact("input/bcard2");
  bcardToContact("input/bcard3");
}

function bcardToContact(fileName){

  fs.readFile(fileName, 'utf8', function (err, content ) {
    if (err){
      console.log("Error reading file: " + fileName);
      return;
    }
    console.log ("=======Begin Input=======\n");
    console.log(content);
    console.log ("=======End Input=======\n");
    let contact = new IContactInfo(content);
    contact.setContactInfo(content);
    console.log ("=======Begin Output=======");
    console.log("Contact Name        : " + contact.getName());
    console.log("Contact Phone Number: " + contact.getPhoneNumber());
    console.log("Contact Email       : " + contact.getEmail());
    console.log("Full Contact        : \n" + contact.getContact());
    console.log ("=======End Output=======\n");
  });

}
