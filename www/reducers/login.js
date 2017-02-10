import models from "../models/models"

export function login(state = {}, action) {
  switch (action.type) {
    case 'login':
      debugger;
      models.post("login", {}).then(function (info){
        debugger;
      })
      return state;
    default:
      return state;
  }
}