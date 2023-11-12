// $(document).ready(function() {
//     $(".group-box:first").addClass("selected-group");

//     $(".group-box").click(function() {
//         // 다른 그룹 박스에서 선택을 해제하고, 클릭한 그룹 박스에 선택을 추가합니다.
//         $(".group-box").removeClass("selected-group");
//         $(this).addClass("selected-group");
//     });
// });

// $(document).ready(function() {
//     var $groupBoxes = $('.group-box');

//     $(".group-box").click(function() {
//         // 다른 그룹 박스에서 선택을 해제하고, 클릭한 그룹 박스에 선택을 추가합니다.
//         $(".group-box").removeClass("selected-group");
//         $(this).addClass("selected-group");
//     });

//     $groupBoxes.on('click', function() {
//         // 클릭한 group-box를 중앙으로 옮깁니다.
//         $groupBoxes.removeClass('centered'); // 모든 group-box의 centered 클래스를 제거합니다.
//         $(this).addClass('centered'); // 클릭한 group-box에 centered 클래스를 추가합니다.

//         muCenter($(this));
//     });

//     function muCenter(target) {
//         var $groupContainer = $('.group-container');
//         var containerWidth = $groupContainer.width();
//         var targetPos = target.position();
//         var targetWidth = target.outerWidth();
//         var containerHalf = containerWidth / 2;
//         var pos;
//         var totalWidth = 0;

//         $groupContainer.find('.group-box').each(function() {
//             totalWidth += $(this).outerWidth();
//         });

//         var selectTargetPos = targetPos.left + targetWidth / 2;

//         if (selectTargetPos <= containerHalf) {
//             pos = 0;
//         } else if ((totalWidth - selectTargetPos) <= containerHalf) {
//             pos = totalWidth - containerWidth;
//         } else {
//             pos = selectTargetPos - containerHalf;
//         }

//         setTimeout(function() {
//             $groupContainer.css({
//                 "transform": "translate3d("+ (pos * -1) +"px, 0, 0)",
//                 "transition-duration": "500ms"
//             });
//         }, 200);
//     }
// });

// var $scrItem = $('.group-box');
// var scrIWidth = 0;
// for (var i=0; i<$scrItem.length; i++) {
//     scrIWidth += $scrItem.eq(i).outerWidth();
// }
// $('.group-container').css('width',scrIWidth)
// $scrItem.click(function(){
//     var target = $(this); 
//     $scrItem.removeClass('on')
//     target.addClass('on');
//     muCenter(target);
// })
// function muCenter(target){
//     var box = $('.group-container');
//     var boxItem = box.find('.group-box');
//     var boxHarf = box.width()/2;
//     var pos;
//     var listWidth=0;
//     var targetLeft = 0;

//     boxItem.each(function(){ listWidth += $(this).outerWidth(); })    
    
//     for (var i=0; i<target.index(); i++) targetLeft += boxItem.eq(i).outerWidth(); // 선택요소 까지 길이
    
//     var selectTargetPos = (targetLeft + target.outerWidth()/2);
//     if (selectTargetPos <= boxHarf) { // left
//         pos = 0;
//     }else if (listWidth - selectTargetPos <= boxHarf) { //right : target 절반 이후 영역이 boxHarf 보다 작을경우 right 정렬
//         pos = listWidth-box.width();
//     }else {
//         pos = selectTargetPos - boxHarf; // 중앙정렬
//     }
    
//     setTimeout(function(){
//         box.animate({scrollLeft:pos},300)
//     }, 200);
// }

$(document).ready(function() {
    $(".group-box:first").addClass("selected-group");

    $(".group-box").click(function() {
        // 다른 그룹 박스에서 선택을 해제하고, 클릭한 그룹 박스에 선택을 추가합니다.
        $(".group-box").removeClass("selected-group");
        $(this).addClass("selected-group");
    });
});

// 근데 이거 좀 하자있음 가운데로 됐다가 안되고 끝부분은 다 안보여지고 ㅠ 수정해야됨 유유
var $scrItem = $('.group-box');
var scrIWidth = 0;
for (var i=0; i<$scrItem.length; i++) {
    scrIWidth += $scrItem.eq(i).outerWidth();
}
$('.group-container').css('width',scrIWidth)
$scrItem.click(function(){
    var target = $(this); 
    $scrItem.removeClass('on')
    target.addClass('on');
    muCenter(target);
})
function muCenter(target){
    var box = $('.scroll-group-container');
    var boxItem = box.find('.group-box');
    var boxHarf = box.width()/2;
    var pos;
    var listWidth=0;
    var targetLeft = 0;

    boxItem.each(function(){ listWidth += $(this).outerWidth(); })    
    
    for (var i=0; i<target.index(); i++) targetLeft += boxItem.eq(i).outerWidth(); // 선택요소 까지 길이
    
    var selectTargetPos = (targetLeft + target.outerWidth()/2);
    if (selectTargetPos <= boxHarf) { // left
        pos = 0;
    }else if (listWidth - selectTargetPos <= boxHarf) { //right : target 절반 이후 영역이 boxHarf 보다 작을경우 right 정렬
        pos = listWidth-box.width();
    }else {
        pos = selectTargetPos - boxHarf; // 중앙정렬
    }
    
    setTimeout(function(){
        box.animate({scrollLeft:pos},200)
    }, 1);
}