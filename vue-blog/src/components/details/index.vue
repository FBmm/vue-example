<template>
    <div class="app-details">
        <article class="article">
            <h1 class="title">30个聪明的生活小技能，省钱又省心，赶紧收藏！</h1>
            <div class="author">
                <a href="" class="avatar"><img src="@/assets/images/headImg.webp" alt=""></a>
                <div class="info">
                    <span class="name">读出新菜</span>
                    <span class="follow">关注</span>
                    <div class="meta">
                        <svg-icon class-name="score-icon" icon-class="score"></svg-icon>
                        <span class="mr10">16.6</span>
                        <span class="mr10">2019.02.16 17:00</span>
                        <span class="mr10">字数 1884</span>
                        <span class="mr10">评论 4</span>
                        <span class="mr10">喜欢 76</span>
                    </div>
                </div>
            </div>
            <div class="show-content">
                <p>生活中难免会遇到一些小问题，很是让人困扰。有时候，掌握一点小智慧，就能让你的生活质量提升。这里有30个超实用的小妙招，看一看，说不定哪天就派上了用场了。</p>
                <div class="image-package"><img src="@/assets/images/details-1.webp" alt=""></div>
                <p><b>1、吃到辣，辣到流眼泪怎么办？</b></p>
                <p>吃辣到流眼泪的食物，喝水并不能解辣，反而会更辣。一个解辣的好方法就是喝牛奶，喝了就可以缓和辣感。</p>
                <p><b>2、切辣椒辣手</b></p>
                <p>经常在家做菜，免不了要切辣椒，可每次切完后，手都像被火烧了一样，辣得生疼，戴着一次性塑料手套也不起作用。不管怎么洗，都只能暂时缓解，过一会又火辣辣的。其实用牙膏洗手效果很好！</p>
                <p><b>3、汤太咸了怎么办？</b></p>
                <p>煮汤时如果不小心加了太多盐，那汤的微妙口感就被破坏掉了。这时补救的方法是，加入马铃薯块再煮个几分钟。因为马铃薯会吸收盐分，要上桌时再把马铃薯捞掉，就可以了。</p>
                <div class="image-package"><img src="@/assets/images/details-2.webp" alt=""></div>
                <p><b>4、怎么让豆腐不易碎？</b></p>
                <p>软绵绵的豆腐在烹调过程中非常容易破碎，如果想要豆腐保持完整，可以在煮之前先浸泡在盐水中，大约30分钟左右，泡过盐水的豆腐下锅之后就不容易破碎。</p>
                <p><b>5、削芋头前先泡醋</b></p>
                <p>削芋头时，手部会因为芋头的关系而愈削愈痒，此时先将手浸泡在醋中，这样一来，手就不痒。</p>
                <div class="image-package"><img src="@/assets/images/details-3.webp" alt=""></div>
                <p><b>7、轻松剥柚子皮</b></p>
                <p>将柚子放在光滑的硬桌子上滚几下，它的皮肉就会分离，就能轻松剥开了~</p>
                <p><b>8、让米饭又靓又香</b></p>
                <p>洗完米之后，在水里加入几滴柠檬汁，可以让饭又靓又香。在洗好准备开始煮的米饭里滴上几滴油，与饭同煮，也能让米饭香靓喔！</p>
                <p><b>9、让饼干一直脆脆的</b></p>
                <p>将饼干装罐时，同时放进一块方糖。由于方糖会吸收罐中的湿气，所以能保持饼干香脆可口的状态。</p>
                <div class="image-package"><img src="@/assets/images/details-4.webp" alt=""></div>
                <p><b>10、鞋子臭臭怎么办？</b></p>
                <p>将少量苏打粉直接放入长筒靴、运动鞋，或常穿而易有异味、湿气的鞋中，在苏打粉作用之下它会吸收湿气及异味，很快你就会有一双干爽的鞋子了。</p>
                <p><b>11、衣服衣领、腋下发黄</b></p>
                <p>先用刷子涂上洗发精，或涂上刮胡膏后静置四至五分钟再洗，即可顺利洗净。</p>
                <div class="image-package"><img src="@/assets/images/details-5.webp" alt=""></div>
                <p><b>12、鲜花保鲜法</b></p>
                <p>在插着鲜花的花瓶里，加进一点啤酒可使鲜花的保鲜期延长许多，因啤酒含有乙醇，能使花枝切口消毒防腐，又含有糖及其它营养物质，能为枝叶提供养分。</p>
            </div>
            <div class="footer"><button class="btn-pay">赞赏支持</button></div>
        </article>
        <aside class="aside">
            <div><img src="@/assets/images/details-ad-1.png" alt=""></div>
            <div><img src="@/assets/images/details-ad-2.jpg" alt=""></div>
        </aside>
    </div>
</template>
<script>
export default {
    name: 'Details',
}
</script>
<style lang="less" scoped>
    .article {
        margin: 0 auto;
        padding-top: 20px;
        padding-bottom: 40px;
        width: 620px;
        .title {
            word-break: break-word!important;
            word-break: break-all;
            margin: 20px 0 0;
            font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
            font-size: 34px;
            font-weight: 700;
            line-height: 1.3;
        }
        .author {
            margin: 30px 0 40px;
            .avatar {
                width: 48px;
                height: 48px;
                vertical-align: middle;
                display: inline-block;
                img {
                    width: 100%;
                    height: 100%;
                    border: 1px solid #ddd;
                    border-radius: 50%;
                }
            }
            .info {
                vertical-align: middle;
                display: inline-block;
                margin-left: 8px;
                .name {
                    margin-right: 3px;
                    font-size: 16px;
                    vertical-align: middle;
                }
                .follow {
                    display: inline-block;
                    margin-bottom: 0;
                    font-weight: 400;
                    text-align: center;
                    vertical-align: middle;
                    -ms-touch-action: manipulation;
                    touch-action: manipulation;
                    cursor: pointer;
                    background-image: none;
                    border: 1px solid transparent;
                    white-space: nowrap;
                    border-radius: 4px;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    border-radius: 40px;
                    color: #fff;
                    background-color: #42c02e;
                    padding: 0 7px 0 5px;
                    font-size: 12px;
                    &:hover {
                        background-color: #3db922;
                        border-color: #3db922;
                    }
                }
                .meta {
                    margin-top: 5px;
                    font-size: 12px;
                    color: #969696;
                }
            }
        }
        .show-content {
            color: #2f2f2f;
            word-break: break-word!important;
            word-break: break-all;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.7;
            p {
                margin: 0 0 25px;
            }
            .image-package {
                padding-bottom: 25px;
                width: 700px;
                margin-left: -40px;
                text-align: center;
                img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                    border: 0;
                    cursor: -webkit-zoom-in;
                    transition: all .25s ease-in-out;
                }
            }
        }
        .footer {
            text-align: center;
            .btn-pay {
                margin-bottom: 20px;
                padding: 8px 25px;
                font-size: 16px;
                color: #fff;
                background-color: #ea6f5a;
                border-radius: 20px;
                &:hover {
                    background-color: #ec6149;
                }
            }
        }
    }
    .aside {
        position: fixed;
        top: 80px;
        right: 50%;
        margin-right: -560px;
        width: 180px;
        img {
            width: 100%;
        }
    }
</style>


