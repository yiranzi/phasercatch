/**
 * Created by yunyi on 2017/8/30.
 */

import {postWithoutAuth} from '../util/ajax'
import {SEVER_URL} from '../util/serverConfig'
import gamedata from '../util/gameData'

/**
 * @param config
 */
const setShareConfigForAll = function (config) {
  shareToFriend(config)
  shareToTimeline(config)
  shareToQQ(config)
  shareToQQZone(config)
  shareToWeibo(config)
}

/**
 * 分享给朋友
 * @param config
 */
const shareToFriend = function (config) {
  window.wx.onMenuShareAppMessage({
    title: config.title,
    desc: config.desc,
    link: config.link,
    imgUrl: config.imgUrl,

    trigger: function (res) {
      // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
      onTrigger('friend')
    },

    success: function (res) {
      //alert('已分享')
      onSuccess('friend')
    },

    cancel: function (res) {
      //alert('已取消')
      onCancel('friend')
    },

    fail: function (res) {
      //alert(JSON.stringify(res))
    }
  })
}

/**
 * 分享到朋友圈
 * @param config
 */
const shareToTimeline = function (config) {
  //注意，这里分享到朋友圈，是没有desc的，直接设置title
  window.wx.onMenuShareTimeline({
    title: config.title,
    link: config.link,
    imgUrl: config.imgUrl,

    trigger: function (res) {
      // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
      //alert('用户点击分享到朋友圈')
      onTrigger('timeline')
    },
    success: function (res) {
      //alert('已分享')
      onSuccess('timeline')
    },
    cancel: function (res) {
      onCancel('timeline')
      //alert('已取消')
    },
    fail: function (res) {
      //alert(JSON.stringify(res))
    }
  })
}

/**
 * 分享到qq
 * @param config
 */
const shareToQQ = function (config) {
  window.wx.onMenuShareQQ({
    title: config.title,
    desc: config.desc,
    link: config.link,
    imgUrl: config.imgUrl,

    trigger: function (res) {
      //alert('用户点击分享到QQ')
      onTrigger('QQ')
    },
    complete: function (res) {
      //alert(JSON.stringify(res))
    },
    success: function (res) {
      //alert('已分享')
      onSuccess('QQ')
    },
    cancel: function (res) {
      //alert('已取消')
      onCancel('QQ')
    },
    fail: function (res) {
      //alert(JSON.stringify(res))
    }
  })
}

/**
 * 分享到qq空间
 * @param config
 */
const shareToQQZone = function (config) {
  window.wx.onMenuShareQZone({
    title: config.title,
    desc: config.desc,
    link: config.link,
    imgUrl: config.imgUrl,

    trigger: function (res) {
      //alert('用户点击分享到QZone')
      onTrigger('QZone')
    },
    complete: function (res) {
      //alert(JSON.stringify(res))
    },
    success: function (res) {
      onSuccess('QZone')
      //alert('已分享')
    },
    cancel: function (res) {
      onCancel('QZone')
      //alert('已取消')
    },
    fail: function (res) {
      //alert(JSON.stringify(res))
    }
  })
}

/**
 * 分享到腾讯微博
 */
const shareToWeibo = function (config) {
  const me = this
  window.wx.onMenuShareWeibo({
    title: config.title,
    desc: config.desc,
    link: config.link,
    imgUrl: config.imgUrl,

    trigger: function (res) {
      //alert('用户点击分享到微博')
      onTrigger('weibo')
    },
    complete: function (res) {
      //alert(JSON.stringify(res))
    },
    success: function (res) {
      onSuccess('weibo')
      //alert('已分享')
    },
    cancel: function (res) {
      onCancel('weibo')
      //alert('已取消')
    },
    fail: function (res) {
      //alert(JSON.stringify(res))
    }
  })
}

/**
 * 触发
 */
const onTrigger  = function () {
  gamedata.track('开始分享')
}

/**
 * 取消
 */
const onCancel  = function () {
  gamedata.track('取消分享')
}

/**
 * 成功
 */
const onSuccess  = function () {
  // console.log('分享成功')
  gamedata.track('分享成功')
}

/**
 * 初始化sdk
 * 从服务器获取签名等内容，然后设置
 */

const initSdkConfig = function () {
  postWithoutAuth(
    {
      url: SEVER_URL + '/wx/bc/signature',
      data: {
        url: window.location.href.split('#')[0]
      }
    }
  ).then(
    function (config) {
      window.wx.config({
        appId: config.wechat_appid,
        timestamp: config.timestamp,
        nonceStr: config.nonceStr,
        signature: config.signature,
        jsApiList: [
          'onMenuShareTimeline', // 分享到朋友圈
          'onMenuShareAppMessage', // 分享给朋友
          'onMenuShareQQ', // 分享到qq
          'onMenuShareWeibo', // 分享到腾讯微博
          'onMenuShareQZone', // 分享到qq空间
          'getNetworkType' // 获取当前网络状态
        ]
      })
      window.wx.ready(function () {
        setTimeout(function () {
          setShareConfigForAll({
            title: '财神快飞',
            imgUrl: location.href.replace('index.html', 'assets/share.png'),
            desc: '考验你的财商的时候到了'
          })
        }, 200)
      })
    }
  ).catch(
    function (err) {
      console.error('设置微信jsSdk失败', err)
    }
  )
}

export {
  initSdkConfig,
  setShareConfigForAll
}
