import {post} from "./fetch"


var modelsConfig = {
  login: {
    url: "login"
  }
}

var getModel = function (name){
  let {model} = modelsConfig;

  

  return model;
}

export default getModel