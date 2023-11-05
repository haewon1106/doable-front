$(document).ready(function(){
    $(".add-list-btn").click(function(){
        // 배경 색상을 --second-color로 토글(흰색 <-> --second-color)합니다.
        $(this).toggleClass("active");
        $(".add-list").toggle();
    });
    $(".delete-list-btn").click(function(){
        // 배경 색상을 --second-color로 토글(흰색 <-> --second-color)합니다.
        $(this).toggleClass("active");
        $(".delete-list").toggle();
    });
    $(".correction-list-btn").click(function(){
        // 배경 색상을 --second-color로 토글(흰색 <-> --second-color)합니다.
        $(this).toggleClass("active");
        $(".correction-list").toggle();
    });
});