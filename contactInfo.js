"use strict";

//Dependencies
const nlp = require("nlp_compromise");

//Constructor
function IContactInfo (bcardContent){
  this.name = "";
  this.phone = "";
  this.email = "";
  this.contact = "";
}

// Class Methods

IContactInfo.prototype.setContactInfo = function (bcardContent)  {
  if (typeof bcardContent === "string" && bcardContent !== null){
    let lines = bcardContent.split ("\n");
    for (let i=0; i<lines.length; i++){
      let line = lines[i];
      if (hasName(line)){
        this.name = extractName(line);
        this.contact += "Name: " + this.name + "\n";
      }
      else if (hasPhoneNumber(line)){
        this.phone = extractPhoneNumber(line);
        this.contact += "Phone: " + this.phone + "\n";
      }
      else if (hasEmail(line)){
        this.email = extractEmail(line)
        this.contact += "Email: " + this.email + "\n";
      }
    }
  }
  else
  {
    console.log ("Warning: document is not in proper format");
    this.name = "";
    this.phone = "";
    this.email = "";
    this.contact = "";
  }
}
// Full contact formatted in the following
//  Name: Mike Smith
//  Phone: 4105551234
//  Email: msmith@asymmetrik.com
IContactInfo.prototype.getName = function (){
    return this.name;
}

// Return phone numbe formatted as a sequence of
// digits with no punctuation: e.g. 4105551234, 17035551259
IContactInfo.prototype.getPhoneNumber = function (){
    return this.phone;
}

// Return email address: e.g. msmith@asymmetrik.com
IContactInfo.prototype.getEmail = function (){
    return this.email;
}

// Get full contact formatted in the following
//  Name: Mike Smith
//  Phone: 4105551234
//  Email: msmith@asymmetrik.com
IContactInfo.prototype.getContact = function (){
    return this.contact;
}

function hasPhoneNumber(line)
{
  let slimLine = line.replace(/\s/g, '');
  if(slimLine.match(/\d{3}[\s.-]?\d{4}/i) && !slimLine.match(/f/i)) {
    return true;
  }
  else{
    return false;
  }
}

function extractPhoneNumber(line)
{
  line = line.replace(/\D/g, '');
  return line;
}

function hasEmail(line)
{
  let emailRgx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRgx.test(line);
}

function extractEmail(line)
{
  line = line.replace(/\s/g, '');
  return line;
}

function hasName(line)
{
  return nlp.person(line).is_person();
}

function extractName(line)
{
  let fname = nlp.person(line).firstName;
  fname = fname.charAt(0).toUpperCase() + fname.substr(1);
  let lname = nlp.person(line).lastName;
  lname = lname.charAt(0).toUpperCase() + lname.substr(1);
  return fname + " " + lname;
}

module.exports=IContactInfo;
