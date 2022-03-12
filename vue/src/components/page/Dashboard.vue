<template>
<div class="home-page">
        <header>
            <div class="learn">我学的课</div>
            <div class="teach">我教的课</div>
            <div class="search">
                <a href="" class="search-btn iconfont">&#xe63d;</a>
                <input type="search" id = "searc" placeholder="请输入要搜索的课程">
            </div>
        </header>
<!--        <div class="function">-->
<!--            <a href="">添加课程</a>-->
<!--            <a href="">新建文件夹</a>-->
<!--        </div>-->

        <div class="class">
            <ul>
                <li>
                    <div class="grid">
                        <a href="">
                            <div class="imgs">
                                <img src="../images/1.png" alt="">
                            </div>
                            <div class="introduce">
                                <div class="name">劳动通论</div>
                                <p>刘向兵</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="grid">
                        <a href="">
                            <div class="imgs">
                                <img src="../images/2.png" alt="">
                            </div>
                            <div class="introduce">
                                <div class="name">中国古典小说巅峰--四大名著鉴赏</div>
                                <p>刘向兵</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="grid">
                        <a href="">
                            <div class="imgs">
                                <img src="../images/3.png" alt="">
                            </div>
                            <div class="introduce">
                                <div class="name">劳动通论</div>
                                <p>刘向兵</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="grid">
                        <a href="">
                            <div class="imgs">
                                <img src="../images/4.png" alt="">
                            </div>
                            <div class="introduce">
                                <div class="name">劳动通论</div>
                                <p>刘向兵</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="grid">
                        <a href="">
                            <div class="imgs">
                                <img src="../images/5.png" alt="">
                            </div>
                            <div class="introduce">
                                <div class="name">劳动通论</div>
                                <p>刘向兵</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="grid">
                        <a href="">
                            <div class="imgs">
                                <img src="../images/6.png" alt="">
                            </div>
                            <div class="introduce">
                                <div class="name">劳动通论</div>
                                <p>刘向兵</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="grid">
                        <a href="">
                            <div class="imgs">
                                <img src="../images/7.png" alt="">
                            </div>
                            <div class="introduce">
                                <div class="name">劳动通论</div>
                                <p>刘向兵</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="grid">
                        <a href="">
                            <div class="imgs">
                                <img src="../images/8.png" alt="">
                            </div>
                            <div class="introduce">
                                <div class="name">劳动通论</div>
                                <p>刘向兵</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('ms_username'),

        };
    },
    components: {
        Schart
    },

};
</script>



<style scoped>

html {
    color: #000;
    background: #FFF
}

body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

fieldset, img {
    border: 0
}

address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal
}

ol, ul {
    list-style: none
}

caption, th {
    text-align: left
}

h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: normal
}

q:before, q:after {
    content: ''
}

abbr, acronym {
    border: 0;
    font-variant: normal
}

sup {
    vertical-align: text-top
}

sub {
    vertical-align: text-bottom
}

input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    *font-size: 100%
}

legend {
    color: #000
}

#yui3-css-stamp.cssreset {
    display: none
}

a {
    text-decoration: none;
}

@font-face {
    font-family: 'iconfont';
    src: url("../font/iconfont.woff2") format('truetype'),
    url("../font/iconfont.woff") format('woff'),
    url("../font/iconfont.ttf") format('ttf');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    margin-top: 50px;
}
.home-page {
    width: 1152px;
    height: 650px;
    background-color: rgb(240, 240, 240);
    margin: 0 auto;
    border-radius: 10px;
}

.home-page header {
    position: relative;
    height: 60px;
    font-size: 16px;
    padding: 0 20px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.15);
}

.home-page header .learn {
    position: relative;
    float: left;
    line-height: 60px;
    padding: 0 24px;
    margin-right: 30px;
    cursor: pointer;
}

.home-page header .learn:hover::after {
    content: '';
    position: absolute;
    margin-top: 52px;
    margin-left: -51px;
    width: 34px;
    height: 4px;
    background-color: #3b90ff;
    border-radius: 3px;
}

.home-page header .teach {
    float: left;
    line-height: 60px;
    cursor: pointer;
}

.home-page header .teach:hover::after {
    content: '';
    position: absolute;
    margin-top: 52px;
    margin-left: -51px;
    width: 34px;
    height: 4px;
    background-color: #3b90ff;
    border-radius: 3px;
}

.home-page .function a {
    text-decoration: none;
    display: inline-block;
    float: left;
    width: 104px;
    height: 36px;
    margin: 20px 20px;
    border-radius: 20px;
    border: 1px solid #8cbcff;
    line-height: 35px;
    text-align: center;
    color: #3A8BFF;
}

.home-page .function a:hover {
    background-color: rgba(114, 197, 232, 0.25);
}

.home-page .function a:active {
    color: #3A8BFF;
}

.home-page .class {
    padding: 20px 20px;
}

.home-page .class ul li {
    position: relative;
    float: left;
    width: 263px;
    height: 250px;
    background-color: white;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
}

.home-page .class ul li a {
    display: inline-block;
    width: 100%;
    height: 250px;
}

.home-page .class ul li:nth-child(4n) {
    margin-right: 0;
}

.home-page .class ul li a img {
    width: 263px;
}

.home-page .class ul li a .introduce {
    padding: 10px 20px;
}

.home-page .class ul li a .introduce .name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    color: black;
}

.home-page .class ul li a .introduce p {
    position: absolute;
    bottom: 10px;
    margin-left: 0;
    color: #999aaa;
}

.home-page .class ul li:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.21);
}

.home-page .class ul li .grid {
    border-radius: 10px;
    overflow: hidden;
}

.home-page header .search {
    position: absolute;
    right: 37px;
    top: 50%;
    margin-top: -17px;
}

.home-page header .search input {
    float: right;
    width: 250px;
    height: 34px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 36px;
    border: 0 solid blue;
}

.home-page header .search input:focus {
    outline: none;
    border: 1px solid #8cbcff;
}

.home-page header .search .search-btn {
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -10px;
    font-size: 20px;
    color: rgba(128, 128, 128, 0.71);
}

</style>