/**
 * Created by yunyi on 2017/8/25.
 */

import 'whatwg-fetch'
import {SEVER_URL, API_TOKEN, CONTENT_TYPE} from './serverConfig'

/**
 * get方法, 必须授权
 * @param url
 * @returns {Promise}
 */
const getWithAuth = function (url) {
  return new Promise((resolve, reject) => {
    // 获得userID
    const user = JSON.parse(localStorage.getItem('game-player')) ? JSON.parse(localStorage.getItem('game-player')) : {"userId":"0ab7410fabb44200b3e42378a15d6af1"}
    if (!user) {
      reject('用户没有权限')
      return
    }

    window.fetch(SEVER_URL + url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-iChangtou-Json-Api-Token': API_TOKEN,
        'Content-Type': CONTENT_TYPE,
        'X-iChangtou-Json-Api-User': user.userId
      },
      // body: JSON.stringify(data)
    }).then(function (response) {
      resolve(response.json())
    }).then(function (json) {
      resolve(json)
      //console.log('成功', json)
    }).catch(function (ex) {
      reject(ex)
    })
  })
}

const getWithOutAuth = function (url) {
  return new Promise((resolve, reject) => {
    window.fetch(SEVER_URL + url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-iChangtou-Json-Api-Token': API_TOKEN,
        'Content-Type': CONTENT_TYPE,
      },
      // body: JSON.stringify(data)
    }).then(function (response) {
      resolve(response.json())
    }).then(function (json) {
      resolve(json)
      //console.log('成功', json)
    }).catch(function (ex) {
      reject(ex)
    })
  })
}

/**
 * post方法
 * @param url
 * @param data
 * @returns {Promise}
 */
const postWithAuth = function (url, data={}) {

  return new Promise((resolve, reject) => {
    // const user = JSON.parse(localStorage.getItem('game-player')) || {userId: '0'}
    //获得 userID
    const user = JSON.parse(localStorage.getItem('game-player')) ? JSON.parse(localStorage.getItem('game-player')) : {"userId":"0ab7410fabb44200b3e42378a15d6af1"}
    if (!user) {
      reject('用户没有权限')
      return
    }

    window.fetch(SEVER_URL + url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'X-iChangtou-Json-Api-Token': API_TOKEN,
        'Content-Type': CONTENT_TYPE,
        'X-iChangtou-Json-Api-User': user.userId
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      resolve(response.json())
    }).then(function (json) {
      resolve(json)
      //console.log('成功', json)
    }).catch(function (ex) {
      reject(ex)
    })
  })
}

/**
 * post方法
 * @param url
 * @param data
 * @returns {Promise}
 */
const postWithoutAuth = function ({url, data={}}) {

  return new Promise((resolve, reject) => {
    console.log('window.fetch', url)
    window.fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'X-iChangtou-Json-Api-Token': API_TOKEN,
        'Content-Type': CONTENT_TYPE
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      resolve(response.json())
    }).then(function (json) {
      resolve(json)
      //console.log('成功', json)
    }).catch(function (ex) {
      reject(ex)
    })
  })
}


export {
  getWithOutAuth,
  getWithAuth,
  postWithAuth,
  postWithoutAuth
}
