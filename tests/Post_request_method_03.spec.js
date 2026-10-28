const {test,expect} = require('@playwright/test')

import{ faker }  from '@faker-js/faker';
 const {DateTime}= require('luxon')

// Tester talk api 
test('Create post api request using dynamic request body',async({request})=>{

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int(1000); 

   const checkinDate = DateTime.now().toFormat("yyyy-MM-dd");
   const checkoutDate = DateTime.now().plus({day:6}).toFormat("yyyy-MM-dd")
    //create post api request
   const postAPIResponce = await request.post('/booking',{
        data:{
             "firstname": firstName,
    "lastname": lastName,
    "totalprice": totalPrice,
    "depositpaid": true,
    "bookingdates": {
        "checkin": checkinDate,
        "checkout": checkoutDate,
    },
    "additionalneeds": "super bowls"
        }
    })
 //Validate the status code 

 expect (postAPIResponce.ok()).toBeTruthy;
 expect(postAPIResponce.status()).toBe(200);

    const postAPIResponceBody = await postAPIResponce.json()
    console.log(postAPIResponceBody);
//Validate json Api Response
expect(postAPIResponceBody.booking).toHaveProperty('firstname',firstName);
expect(postAPIResponceBody.booking).toHaveProperty('lastname',lastName)

console.log(postAPIResponceBody.booking.firstname)
console.log(postAPIResponceBody.booking.totalprice)

//validate the date api responce
expect(postAPIResponceBody.booking.bookingdates).toHaveProperty('checkin',checkinDate)
expect(postAPIResponceBody.booking.bookingdates).toHaveProperty('checkout',checkoutDate)

//print the nested date 
console.log(postAPIResponceBody.booking.bookingdates.checkin)
console.log(postAPIResponceBody.booking.bookingdates.checkout)



})