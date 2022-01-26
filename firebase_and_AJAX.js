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