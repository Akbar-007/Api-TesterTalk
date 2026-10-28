const {test,expect} = require('@playwright/test')

const bookingApiRequestBody=require('../test-data/post_request_body.json')
// Tester talk api 
test('Create post api request using static json file',async({request})=>{
    //create post api request
   const postAPIResponce = await request.post('/booking',{
        data: bookingApiRequestBody
    
})
 //Validate the status code 

 expect (postAPIResponce.ok()).toBeTruthy;
 expect(postAPIResponce.status()).toBe(200);

    const postAPIResponceBody = await postAPIResponce.json()
    console.log(postAPIResponceBody);
//Validate json Api Response
expect(postAPIResponceBody.booking).toHaveProperty("firstname", "mohamed Akbar King");
expect(postAPIResponceBody.booking).toHaveProperty("lastname", "Akbar King")

console.log(postAPIResponceBody.booking.firstname)
console.log(postAPIResponceBody.booking.totalprice)

//validate the date api responce
expect(postAPIResponceBody.booking.bookingdates).toHaveProperty("checkin", "2018-01-01")
expect(postAPIResponceBody.booking.bookingdates).toHaveProperty("checkout", "2019-01-01")

//print the nested date 
console.log(postAPIResponceBody.booking.bookingdates.checkin)
console.log(postAPIResponceBody.booking.bookingdates.checkout)



})