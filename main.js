let fireBaseURL = "https://todo-list-adad1-default-rtdb.firebaseio.com/";
let jsonEXT = ".json";

(function(){
    $.ajax({
        type: "GET",
        url: `${fireBaseURL}${jsonEXT}`,
        success: function(data){
            let {tasks} = data
            console.log(tasks)
Object.keys(tasks).forEach(key =>{
               console.log(tasks[key].description)
           
           })            
        }
    })
})(); 
























// const $getData = $("#getData")

// (function(){
//     let savedTask = window.localStorage.getItem("currentTask")
//     console.log(savedTask)
//     $.ajax({
//         type: "GET",
//         url: `${fireBaseURL}${jsonEXT}`,
//         success: function(data){
//             console.log(data, "Gathering data. Please wait.")
//             let userData = {...data}
//             Object.keys(userData).forEach(user =>{
//                 console.log(userData[user])
//                  Object.keys(userData[user].savedTask).forEach(text =>{
//                     let message = userData[user].savedTask
//                     console.log(message[text], "logging messages")

//                 }
//                  )}
//         )}
//     })
// })
// /*
// const $submit = $("#submit");

// (function(){
//     let savedUser = window.localStorage.getItem("currentUser")
//      console.log(savedUser)
//     $.ajax({
//         type: "GET",
//         url: `${fireBaseURL}${jsonEXT}`,
//         success: function(data){
//             //console.log(data, "Logging the entire data object");
//             let userData = {...data};
//             Object.keys(userData).forEach(user =>{
//                 console.log(userData[user])
//                  Object.keys(userData[user].posts).forEach(text =>{
//                     let message = userData[user].posts
//                     //console.log(message[text], "logging messages")
                    
//                     if(savedUser == userData[user].userName) {

//                         let userBox2 = "<div class='text-box' style='border: 1px solid black; margin-top: 5px'>" +
//                      "<p>" + userData[user].firstName + " " + userData[user].lastName +
//                     "</p>" + "<p>" + message[text].post + "</p>" +
//                      "<p>" + message[text].time + "</p>"+ "</div>"+ "<button>" + "EDIT" + "</button>"+ "<button>" + "DELETE" + "</button>"
//                      $('#userList').append(userBox2)

//                     } else {
//                         let userBox1 = "<div class='text-box' style='border: 1px solid black; margin-top: 5px'>" +
//                      "<p>" + userData[user].firstName + " " + userData[user].lastName +
//                     "</p>" + "<p>" + message[text].post + "</p>" +
//                      "<p>" + message[text].time + "</p>"+ "</div>"
//                      $('#userList').append(userBox1)
//                     }                     

//                 })
//             })
//         },
//         error: function(error){
//             console.log(error);
//         }
//     })
// })();

// // //POST Method
// // $postBtn.click(function(){
// //     $.ajax({
// //         type:"POST",
// //         url:`${fireBaseURL}${jsonEXT}`,
// //         data: JSON.stringify({
// //          firstName: "",
// //          lastName: "",
// //          age: "",
// //          userName: "",
// //          posts: [{
// //              id: 1,
// //              time: "",
// //              post: "",
// //              likes: "",
// //              dislikes: ""
// //          }]
// //         }),
// //         success: function(data){
// //             console.log(data)
// //             let userData = {...data};
           

// //                })
// //            })
// //         },
// //         error: function(error){
// //             console.log(error)
// //         }
// //     })
// // })

// //Delete Method
// // $deleteDataBtn.click(function(){
// //     $.ajax({
// //         type:"DELETE",
// //         url:`${fireBaseURL}${user}${posts}${jsonEXT}`,
// //         success: (data) => {
            
// //             console.log("Deleted Successfully" + data)
// //         },
// //         error: (error) => {
// //             console.log(error)
// //         }
// //     })
// // })

// //PATCH Method
// $submit.click(function(){
//     const newUser = document.getElementById("userName").value
//     const newUserObj = {
//         [newUser]: {
//             firstName: document.getElementById("firstName").value,
//             lastName: document.getElementById("lastName").value,
//             userName: newUser,
//             age: document.getElementById("ageBox").value,
//             posts:[{
//                 "id":1,
//                 "time":"1/01/2022",
//                 "post":"Welcome To Twitter",
//                 "likes":"643",
//                 "dislikes":"5"
//             }]
//         }
//     }
//     $.ajax({
//         type:"PATCH",
//         url:`${fireBaseURL}${jsonEXT}`,
//         data: JSON.stringify(newUserObj),
//         success: function(data){
//             console.log(data)
//             localStorage.setItem("currentUser", newUser);
//             window.location.href = "thrifter-dashboard.html";
//         },
//         error: function(error){
//             console.log(error)
//         }
//     })
// })


// // //PUT Method
// // $putDataBtn.click(function(){
// //     $.ajax({
// //         type: "PUT",
// // //         url:`${fireBaseURL}${jsonEXT}`,
// //         data:JSON.stringify({
// //              firstName: "Stan",
// //             lastName:"Fischer",
// //                  age: 39
// //         }),
// //          success: (data) => {
// //            console.log(data)
// //          },
// //         error: (error) => {
// //             console.log(error)
// //        }
// //     })
// //  })
 
// //  */
