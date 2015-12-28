$(function(){
	var TimeFn = null;
	var articalId = null;
    $('.anchor').click(function () {
        clearTimeout(TimeFn);
        articalId = $(this).attr("id");
        TimeFn = setTimeout(function(){
            var pdf = "<embed id='articleView' width='100%'' height='600' src='articals/"+articalId+".pdf'> </embed> "
            $("#articalContainer").html(pdf);
        },300);
    });
    
    $('.anchor').dblclick(function () {
        clearTimeout(TimeFn);
        articalId = null;
        $("#articalContainer").html("");
    })
})