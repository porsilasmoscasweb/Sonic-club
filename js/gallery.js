$(function(){
    $(".carousel ul li").click(function(){
        var img = $(this).find("img").attr("src");
        $(".carousel ul li").removeClass("active");
        $("#galeria .bg-galeria img").attr("src", img);
        $(this).addClass("active");
    });
});