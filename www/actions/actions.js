import * as constants from '../constants/constants.js'

export function increase(count) {
  return {
    type: constants.ACTION_INCREASE,
    count: count
  }
}

export function login(phone, pwd){
  return {
    type: constants.ACTION_LOGIN,
    phone: phone,
    pwd: pwd
  }
}