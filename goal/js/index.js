$(document).ready(function(){
    $(".add-list-btn").addClass("active");
    $(".add-list").show();
    $(".delete-list").hide();
    $(".correction-list").hide();

    $(".add-list-btn").click(function(){
        $(".delete-list-btn").removeClass("active");
        $(".correction-list-btn").removeClass("active");
        $(this).addClass("active");
        
        $(".delete-list").hide();
        $(".correction-list").hide();
        $(".add-list").show();
    });

    $(".delete-list-btn").click(function(){
        $(".add-list-btn").removeClass("active");
        $(".correction-list-btn").removeClass("active");
        $(this).addClass("active");
        
        $(".add-list").hide();
        $(".correction-list").hide();
        $(".delete-list").show();
    });

    $(".correction-list-btn").click(function(){
        $(".add-list-btn").removeClass("active");
        $(".delete-list-btn").removeClass("active");
        $(this).addClass("active");
        
        $(".add-list").hide();
        $(".delete-list").hide();
        $(".correction-list").show();
    });
});

// 직접 입력
$(function() {
    $(".selboxDirect").hide();
    
    $(".category").change(function() {
        var parentCategoryBox = $(this).closest('.category-box');

        if ($(this).val() == "direct") {
            $(".selboxDirect", parentCategoryBox).show();
            $(this).hide();
        } else {
            $(".selboxDirect", parentCategoryBox).hide();
        }
    });
});
