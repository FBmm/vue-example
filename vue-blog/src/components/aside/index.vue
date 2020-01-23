<template>
  <div class="app-aside">
    <div class="board">
      <div class="board-item mb6">
        <img src="@/assets/images/banner-s-1.png" alt />
      </div>
      <div class="board-item mb6">
        <img src="@/assets/images/banner-s-2.png" alt />
      </div>
      <div class="board-item mb6">
        <img src="@/assets/images/banner-s-3.png" alt />
      </div>
      <div class="board-item mb6">
        <img src="@/assets/images/banner-s-4.png" alt />
      </div>
    </div>
    <div class="recommended">
      <div class="qrbox">
        <img src="@/assets/images/qrcode.png" alt />
        <div class="right">
          <div class="qr-title">下载简书手机App ></div>
          <div class="qr-content">随时随地发现和创作内容</div>
        </div>
      </div>
      <div class="ad-box">
        <img src="@/assets/images/ad-1.png" alt />
      </div>
      <div class="re-author">
        <div class="title clearfix">
          <span class="left">推荐作者</span>
          <span class="right">换一批</span>
        </div>
        <div class="list">
          <div class="list-item clearfix">
            <div class="left">
              <img src="@/assets/images/headImg.webp" alt />
            </div>
            <div class="right">
              <div class="name">吴晓布</div>
              <p class="des">写了681.1k字 · 21.6k喜欢</p>
            </div>
            <div class="follow">关注</div>
          </div>
          <div class="list-item clearfix">
            <div class="left">
              <img src="@/assets/images/headImg.webp" alt />
            </div>
            <div class="right">
              <div class="name">吴晓布</div>
              <p class="des">写了681.1k字 · 21.6k喜欢</p>
            </div>
            <div class="follow">关注</div>
          </div>
          <div class="list-item clearfix">
            <div class="left">
              <img src="@/assets/images/headImg.webp" alt />
            </div>
            <div class="right">
              <div class="name">吴晓布</div>
              <p class="des">写了681.1k字 · 21.6k喜欢</p>
            </div>
            <div class="follow">关注</div>
          </div>
          <div class="list-item clearfix">
            <div class="left">
              <img src="@/assets/images/headImg.webp" alt />
            </div>
            <div class="right">
              <div class="name">吴晓布</div>
              <p class="des">写了681.1k字 · 21.6k喜欢</p>
            </div>
            <div class="follow">关注</div>
          </div>
          <div class="list-item clearfix">
            <div class="left">
              <img src="@/assets/images/headImg.webp" alt />
            </div>
            <div class="right">
              <div class="name">吴晓布</div>
              <p class="des">写了681.1k字 · 21.6k喜欢</p>
            </div>
            <div class="follow">关注</div>
          </div>
        </div>
        <div class="footer">
          <button class="all-btn">查看全部 ></button>
        </div>
      </div>
      <div class="ad-box">
        <img src="@/assets/images/ad-2.jpg" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Aside"
};
</script>
<style lang="less" scoped>
.app-aside {
  .mb6 {
    margin-bottom: 6px;
  }
  .board {
    img {
      width: 100%;
    }
  }
  .recommended {
    .qrbox {
      display: flex;
      padding: 10px 22px;
      border: 1px solid #f0f0f0;
      border-radius: 6px;
      justify-content: center;
      img {
        width: 60px;
        height: 60px;
        opacity: 0.85;
      }
      .right {
        padding: 9px 0;
        margin-left: 7px;
      }
      .qr-title {
        font-size: 15px;
        color: #333;
        margin-bottom: 5px;
      }
      .qr-content {
        font-size: 13px;
        color: #999;
      }
    }
    .ad-box {
      margin-top: 30px;
      img {
        width: 100%;
      }
    }
    .re-author {
      margin-top: 20px;
      .title {
        span {
          font-size: 14px;
          color: #969696;
          cursor: pointer;
        }
        .left {
          float: left;
        }
        .right {
          float: right;
        }
      }
      .list {
        .list-item {
          margin-top: 15px;
          img {
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
          }
          .left {
            width: 48px;
            height: 48px;
            margin-right: 10px;
            float: left;
          }
          .right {
            float: left;
            padding: 4px 0;
          }
          .name {
            text-align: left;
            font-size: 14px;
            margin-bottom: 5px;
          }
          .des {
            text-align: left;
            font-size: 12px;
            color: #969696;
          }
          .follow {
            float: right;
            margin-top: 5px;
            font-size: 13px;
            color: #42c02e;
            cursor: pointer;
          }
        }
      }
    }
    .footer {
      margin-top: 20px;
      .all-btn {
        padding: 7px 7px 7px 12px;
        left: 0;
        width: 100%;
        font-size: 13px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
      }
    }
  }
}
</style>


