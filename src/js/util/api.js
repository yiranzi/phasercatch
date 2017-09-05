import {SEVER_URL} from './serverConfig'

const apiUrlPlayer = {
  /**
   * game
   */
  // 提交最高分数
  'player_best_score': '/flappybird/upload-socre',

  // 加载玩家排行
  'player_load_rank': '/flappybird/rank'
}

export const getUrl = (urlPath, urlMap = apiUrlPlayer) => urlMap[urlPath]
