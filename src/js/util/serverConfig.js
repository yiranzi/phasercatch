/**
 * Created by yunyi on 2017/8/25.
 */

/**
 * Created by jun on 2016/8/23.
 */

//import {debug} from '../util/environment'

const debug = window.location.href.indexOf('https://h5.ichangtou.com') === -1

let SEVER_URL = ''

let API_TOKEN = ''

let CONTENT_TYPE = ''

let D_PLUS_ID = ''

let ICT_DATA_SERVER = ''

let WX_APPID = ''

let PROJECT = ''

let MSITE_URL = ''

let ZHOULE_APPID = ''

let DEFAULT_ID = ''


if (debug) {
  /**
   * 开发环境
   */
  SEVER_URL = 'https://ict48test.ichangtou.com'

  API_TOKEN = 'XX:_:w2qlJFV@ccOeiq41ENp><ETXh3o@aX8M<[_QOsZ<d8[Yz:NIMcKwpjtBk0e'

  CONTENT_TYPE = 'application/json; charset=utf-8'

  D_PLUS_ID = 'da168f4458633q92c79b'

  ICT_DATA_SERVER = 'https://mongo-test.ichangtou.com'

  WX_APPID = 'wx7cf8dd5d80048e42'

  PROJECT = 'hgame'

  MSITE_URL = window.location.href.split('index.html')[0]

  ZHOULE_APPID = ''

  DEFAULT_ID = '0ab7410fabb44200b3e42378a15d6af1'
}

else
{
  /**
   * 生产环境
   */
  SEVER_URL = 'https://ict48.ichangtou.com'

  API_TOKEN = 'DE:_:w2qlJFV@ccOeiq41ENp><ETXh3o@aX8M<[_QOsZ<d8[Yz:NIMcKwpjtBk0e'

  CONTENT_TYPE = 'application/json; charset=utf-8'

  D_PLUS_ID = 'ea16565d66171ebe26f4'

  ICT_DATA_SERVER = 'https://mongo.ichangtou.com'

  WX_APPID = 'wxd6c823882698f217'

  ZHOULE_APPID = 'wxe95fb252e5bc8152'

  PROJECT = 'hgame'

  MSITE_URL = window.location.href.split('index.html')[0]

  DEFAULT_ID = '854b09a048d04b7ca360528712133476'
}

export {
  debug,
  SEVER_URL,
  API_TOKEN,
  CONTENT_TYPE,
  D_PLUS_ID,
  ICT_DATA_SERVER,
  WX_APPID,
  ZHOULE_APPID,
  PROJECT,
  MSITE_URL,
  DEFAULT_ID
}
