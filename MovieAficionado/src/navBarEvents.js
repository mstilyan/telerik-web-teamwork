$(document).ready(function(){
    $("#main-container").html(homeLayoutProvider.html);
    
    $("#newest-a").click(function(){
        $("#home-a").parent().removeClass("active");
        $("#favourite-a").parent().removeClass("active");
        $("#cinemas-a").parent().removeClass("active");
    
        $(this).parent().addClass("active");
    });



    $("#favourite-a").click(function(){
        $("#home-a").parent().removeClass("active");
        $("#newest-a").parent().removeClass("active");
        $("#cinemas-a").parent().removeClass("active");
        $(this).parent().addClass("active");        

        var html = favouriteMoviesLayoutProvider().html;
        $("#main-container").html(html);
        
    });



    $("#cinemas-a").click(function(){

        $("#main-container").html("");

        $("#home-a").parent().removeClass("active");
        $("#favourite-a").parent().removeClass("active");
        $("#newest-a").parent().removeClass("active");
        
        $(this).parent().addClass("active");
        var html = cinemaLayoutProvider.html;
        $("#main-container").html(html);
    });



    $("#home-a").click(function(){
        var html = homeLayoutProvider.html;
        $("#main-container").html(html);
        $("#newest-a").parent().removeClass("active");
        $("#favourite-a").parent().removeClass("active");
        $("#cinemas-a").parent().removeClass("active");
        
        $(this).parent().addClass("active");
    });



    $("#search-btn").click(function(){
        var html = searchBarLayoutProvider.html;
        $("#main-container").html(html);
        $("#newest-a").parent().removeClass("active");
        $("#favourite-a").parent().removeClass("active");
        $("#cinemas-a").parent().removeClass("active");       
        $("#home-a").parent().removeClass("active");
    })

    $("#newest-m").click(function(){
        var html = carouselLayoutProvider.html(posterDataBase.movies);
        $("#main-container").html(html);
    });

    $("#newest-g").click(function(){
        var html = carouselLayoutProvider.html(posterDataBase.games);
        $("#main-container").html(html);
    });

    $("#newest-s").click(function(){
        var html = carouselLayoutProvider.html(posterDataBase.series);
        $("#main-container").html(html);
    });
});