# Node project for parsing business card information into contacts for mobile phones.

Download the project zip from Github.

### Install Dependencies

* Get the tools we depend upon via `npm`, the [node package manager][npm].

I have preconfigured `npm` to automatically run `node main.js` so we can simply do:

```
npm install

```

You should find that you have a new folders in your project.

* `node_modules` - contains the npm packages for the tools we need

## Directory Layout

```
input/                          --> Business card testing inputs.  One business card per file.
contactInfo.js                  --> Contact information javascript classs (IContactInfo)
main.js                         --> main program
package.json                    --> node tools package manager script file (npm tools)
README.md                       --> project instructions and general information
```

### Running the App

Run the following command.  The main program will parse through the business card files from input/
and display the extracted information for each contact.

```
npm start
```

### Limitations and Future improvements
- Based on requirement that the algorithm will run on mobile phones, I choose solutions with smaller space/processing requirement.
  The NLP(natural language processing) library I used is dumbed down to match common first names for
  determining if a person exists in a string. For phone numbers, I choose regular expression instead of
  specialized library such as Google phone number library.
- Testing.  I didn't include any automated tests due to time limitations.
