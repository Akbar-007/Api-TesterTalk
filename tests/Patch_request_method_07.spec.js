const {test,expect} = require('@playwright/test') 
//importing the string
import { stringFormat } from '../utils/common'


const bookingApiRequestBody=require('../test-data/post_dynamic_request_body.json')
//token api request
const tokenRequestBody=require('../test-data//token_request_body.json')
//put api request 
//  const putRequestBody = require('../test-data//Put_api_request_body.json')
 //patch api request
const patchapirequest= require('../test-data//Patch_request_body.json')


// Tester talk api 
test('Create Patch api request in playwright',async({request})=>{
    //give a value for dynamic api request body
   const dynamicRequestBody = stringFormat(JSON.stringify(bookingApiRequestBody),"mohamed Akbar King","Akbar King","kallumuddi");
   console.log("== POST API ==")
 
   //create post api request
   const postAPIResponce = await request.post('/booking',{
        data: JSON.parse(dynamicRequestBody)
    
})
 //Validate the status code 

 expect (postAPIResponce.ok()).toBeTruthy();
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
console.log("== GET API ==")

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

//generate the tokens 

const tokenResponce = await request.post(`/auth`,{
    data:tokenRequestBody
})
const tokenApiresponcebody = await tokenResponce.json();
const tokenno = tokenApiresponcebody.token;

console.log("this is our token number :"+ tokenno)

// put api request body
// console.log("== PUT API ==")

// const putResponce = await request.put(`/booking/${bid}`, {
//     headers: {
//         "Content-Type": "application/json",
//         "Cookie": `token=${tokenno}`
//     },
//     data: putRequestBody
// });
// const putapireponcebody = await putResponce.json();
// console.log('putapireponcebody')
// console.log("Status:", putResponce.status());
// expect(putResponce.status()).toBe(200);


//patch api request
console.log("== Patch ==")
const patchresponce = await request.patch(`/booking/${bid}`,{
    headers:{
        "Content-Type": "application/json",
        "Cookie" : `token=${tokenno}`
    },
    data: patchapirequest
    
})
const patchapiresponcebody = await patchresponce.json();
console.log(patchapiresponcebody)

console.log("Status:", patchresponce.status());

expect(patchresponce.status()).toBe(200);





})