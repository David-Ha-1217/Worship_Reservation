/*
    최초 작성 : 2023년 6월 18일, 일요일
    파일 명 : common.js
    상세 설명
    - 헤더, 푸터 영역.
*/

// NAVBAR_MENU
$(function() {
    $("ul.navbar_menu li a").on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr("href");

        if (id != "qna") {
            $("#content").load("./"+id+".html");
        } else {
            window.location.href = "https://kiwi-egret-245.notion.site/ce703dc136364054a594a2e57bec19ce";
        }

    });
});

// toogleBtn 클릭 시, 메뉴 펼침
const toogleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});