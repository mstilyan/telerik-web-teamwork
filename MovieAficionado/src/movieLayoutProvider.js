var movieLayoutProvider = (function (favourites) {
    var html = function(movie) {
        var poster = movie.Poster;
        var buttonColor = "btn-outline-success";
        var buttonMessage = "Add to Favourites";
        var buttonAttr = "";
        var movieId = movie.imdbID;

        if (poster == "N/A") {
            poster = "https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg";
        }
    
        if (favourites[movieId])
        {
            buttonColor = "btn-outline-danger";
            buttonMessage = "Added";
            buttonAttr = "disabled";
        }

        return `<hr class="bg-success">
                <div class="row">
                    <div class="col-sm offset-1 float-right">
                        <img id="${movieId}-img" src="${poster}">
                    </div>
                    <div class="col-sm">
                        <h1 id="${movieId}-title" class="text-center">${movie.Title}</h1>
                        <div id="${movieId}-year" class="row">
                            <b>Year: </b>
                            <span>${movie.Year}</span>
                        </div>
                        <div id="${movieId}-genre" class="row">
                            <b>Genre: </b>
                            <span>${movie.Genre}</span>
                        </div>
                        <div class="row">
                            <b>Director: </b>
                            <span>${movie.Director}</span>
                        </div>
                        <div class="row">
                            <b>Plot: </b>
                            <span>${movie.Plot}</span>
                        </div>
                        <div class="row">
                            <b>Awards: </b>
                            <span>${movie.Awards}</span>
                        </div>
                        <br>
                        <div class="row float-right">
                            <button id="${movieId}-add-btn" ${buttonAttr} type="button" class="btn ${buttonColor} add-btn">${buttonMessage}</button>
                        </div>
                    </div>
                    <div class="col-sm=1 offset-1 float-right">
                    </div>
                </div>
                <hr class="bg-success">`;
    }
    
    return{
        html
    };
}(favouritesDatabase.favourites));


