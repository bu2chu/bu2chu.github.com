$(function(){

    $('.anchor').click(function () {
        var articalId = $(this).attr("id");
        var pdf = "<embed id='articleView' width='100%'' height='100%' src='articals/"+articalId+".pdf'> </embed> "
        $("#articalMask").show();
        $("#articalContainer").html(pdf);
        $("#articalContainer").show();
        $('#optHint').show();
    });
    
    $('#articalMask').dblclick(function () {
        $("#articalMask").hide();
        $("#articalContainer").html("");
        $("#articalContainer").hide();
    })

    $('#optHint').dblclick(function(){
        $("#articalMask").hide();
        $("#articalContainer").hide();
        $('#optHint').hide();
        $("#articalContainer").html("");
    })
})
