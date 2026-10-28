const {test,expect} = require('@playwright/test') 
//importing the string
import { stringFormat } from '../utils/common'


const bookingApiRequestBody=require('../test-data/post_dynamic_request_body.json')
// Tester talk api 
test('Query Params api request in playwright',async({request})=>{
    //give a value for dynamic api request body
   const dynamicRequestBody = stringFormat(JSON.stringify(bookingApiRequestBody),"mohamed Akbar King","Akbar King","kallumuddi");
    //create post api request
   const postAPIResponce = await request.post('/booking',{
        data: JSON.parse(dynamicRequestBody)
    
})
 //Validate the status code 

 expect (postAPIResponce.ok()).toBeTruthy;
 expect(postAPIResponce.status()).toBe(200);

    const postAPIResponceBody = await postAPIResponce.json()
    console.log(postAPIResponceBody);

    const bid = postAPIResponceBody.bookingid;
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
console.log("=========================")

//Get api call
const getApiResponce = await request.get(`/booking/`,{
    params:{
        "firstname": "mohamed Akbar King",
        "lastname": "Akbar King",
    }
})

console.log(await getApiResponce.json())

// valitate the responce
expect(getApiResponce.ok()).toBeTruthy();
expect(getApiResponce.status()).toBe(200);

})