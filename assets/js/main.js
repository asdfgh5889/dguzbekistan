$(document).ready(function(){
$(window).scroll(
function()
{
    var scroll = $(window).scrollTop();
    if(scroll < 20)
    {
        $('#top-navbar').removeClass('gradient-blue-center');
    } 
    else
    {
        $('#top-navbar').addClass('gradient-blue-center');
    }
})

$("#fileupload").change(function(e) {
    var fileName = e.target.files[0].name
    $("#filename").text(fileName)
});
    
$('input[type=tel]').mask('998-(00)')
})