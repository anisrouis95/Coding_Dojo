const express = require('express');
const Chance = require('chance');
const app = express();
const port = 8001;

const chance = new Chance();

function createUser() {
    return {
        password: chance.string(),
        email: chance.email(),
        phoneNumber: chance.phone(),
        lastName: chance.last(),
        firstName: chance.first(),
        _id: chance.guid(),
    };
}


// Function to create a new company with fake data using faker
function createCompany() {
    return {
        _id: chance.guid(),
        name: chance.company(),
        address: {
            street: chance.address(),
            city: chance.city(),
            state: chance.state(),
            zipCode: chance.zip(),
            country: chance.country(),
        },
    };
}

// Express route to handle new user creation
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json({ user: newUser });
});

// Express route to handle new company creation
app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json({ company: newCompany });
});

// Express route to handle both new user and new company creation
app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// i did the work with Faker but for some reason i got an error and it doesnt recognise it
// const express = require('express');
// const faker = require('faker');

// const app = express();
// const port = 3000;

// // Function to create a new user with fake data using faker
// function createNewUser() {
//   return {
//     password: faker.internet.password(),
//     email: faker.internet.email(),
//     phoneNumber: faker.phone.phoneNumber(),
//     lastName: faker.name.lastName(),
//     firstName: faker.name.firstName(),
//     _id: faker.datatype.uuid(),
//   };
// }

// // Function to create a new company with fake data using faker
// function createNewCompany() {
//   return {
//     _id: faker.datatype.uuid(),
//     name: faker.company.companyName(), // Corrected method for generating a fake company name
//     address: {
//       street: faker.address.streetAddress(),
//       city: faker.address.city(),
//       state: faker.address.state(),
//       zipCode: faker.address.zipCode(),
//       country: faker.address.country(),
//     },
//   };
// }

// // Express route to handle new user creation
// app.get('/api/users/new', (req, res) => {
//   const newUser = createNewUser();
//   res.json({ user: newUser });
// });

// // Express route to handle new company creation
// app.get('/api/companies/new', (req, res) => {
//   const newCompany = createNewCompany();
//   res.json({ company: newCompany });
// });

// // Express route to handle both new user and new company creation
// app.get('/api/user/company', (req, res) => {
//   const newUser = createNewUser();
//   const newCompany = createNewCompany();
//   res.json({ user: newUser, company: newCompany });
// });

// // Start the Express server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
