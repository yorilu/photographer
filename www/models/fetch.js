import projectJson from "../project.json"
import mockData from "../mockdata/mockdata"

/*
  param: {
     type: ""
  }
*/

var fetch = function (api, param) {
  var project = projectJson.project;
  var url = project.requestUrl;
  var useMock = project.useMock;

  var promise;
  if(useMock){
    mockData
    debugger;
    promise = new Promise(function (res, rej){
      setTimeout(function (){
        
      }, Math.random() * 500 + 500)
    });
  }else{
    promise = fetch(url + api, { method: 'post', credentials: 'include'});
  }
  
  return promise;
}

var post = function (api, param){
  var promise = this.fetch(api, param);

  promise.then(function (info){
   
  })

  return promise;
}

export function post