function scaleDown() {
 
    $('.work > figure').removeClass('current').addClass('not-current');
    $('nav > ul > li').removeClass('current-li');
}

function show(category) {
 
    scaleDown();
 
    $('#' + category).addClass('current-li');
    $('.' + category).removeClass('not-current');
    $('.' + category).addClass('current');
 
    if (category == "all") {
        $('nav > ul > li').removeClass('current-li');
        $('#all').addClass('current-li');
        $('.work > figure').removeClass('current, not-current');
    } 
}

function showProject(id) {
    $("#project_background").removeClass('overlay-hidden').addClass('overlay-visible');
    $.getJSON("http://137.74.161.134:3000/project/" + id)
     .done(function(project) {
	 console.log(project);
     });
}

function hideProject() {
	$("#project_background").removeClass('overlay-visible').addClass('overlay-hidden');
}

$(document).ready(function(){
 
 	console.log("hellow!");
    $('#all').addClass('current-li');
 
    $("nav > ul > li").click(function(){
        show(this.id);
    });

    $(".typed").typed({
    	 strings: ["Unity3d developer", "3d developer", "Node.js developer", "C# developer", "Android developer", "Developer"],
        typeSpeed: 120,
        loop : false
    });
});
