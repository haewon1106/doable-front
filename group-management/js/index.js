// $(document).ready(function () {
//     let longClickTimer;
//     const myGroup = $('.my-group');
//     const modal = $('.modal');

//     myGroup.on('mousedown touchstart', handleMouseDown);
//     myGroup.on('mouseup touchend', handleMouseUp);

//     function handleMouseDown() {
//         longClickTimer = setTimeout(showModal, 1000); // 1 second
//     }

//     function handleMouseUp() {
//         clearTimeout(longClickTimer);
//     }

//     function showModal() {
//         modal.css('display', 'flex');
//     }
    
//     function closeModal() {
//         modal.css('display', 'none');
//     }    
// });
$(function () {
    let clickTimer;
    const myGroup = $('.my-group');
    const modal = $('.modal');

    myGroup.on('mousedown touchstart', handleMouseDown);
    myGroup.on('mouseup touchend', handleMouseUp);

    function handleMouseDown() {
        var myGroupContainer = $(this).closest('.my-group-container');
        clickTimer = setTimeout(function () {
            myGroupContainer.find(".modal").show();
            myGroupContainer.find(".modal").css('display', 'flex');
        }, 1000); // 1 second
    }

    function handleMouseUp() {
        clearTimeout(clickTimer);
    }

    $(document).click(function () {
        $(".modal").hide();
    });

    $(".modal").click(function (event) {
        event.stopPropagation();
    });

    $(".modal-content").click(function (event) {
        event.stopPropagation();
    });
});
