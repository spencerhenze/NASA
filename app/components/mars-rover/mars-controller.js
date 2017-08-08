function MarsController() {
    var marsService = new MarsService();

    function drawRoverSection() {
        template = `
            <form onsubmit="app.controllers.marsController.search(event)">
                <div class="form-group">
                    <label for="sol">Which day of the Curiosity Rover's journey would you like to see?</label>
                    <input type="text" name="sol" placeholder="enter a number">
                </div>
                <button type="submit">See Photos</button>
            </form>
        `
        document.getElementById('content').innerHTML = template;
    }

    function drawPhotos(photos) {
        var template = '';

        photos.forEach(photo => {
            template += `
            <div class="card-wrapper">
                <div class="card card-container">
                    <img class="card-img-top rover-image" src="${photo.img_src}" alt="rover image">
                    <div class="card-block">
                        <h4>Rover: ${photo.rover["name"]}</h4>
                        <h4>Planet: Mars</h4>
                        <h4>Sol: ${photo.sol}</h4>
                    </div>
                </div>
            </div>
         `
        })

        document.getElementById('results').innerHTML = template;
    }

    this.loadRover = function() {
        drawRoverSection();
    }


    this.search = function (e) {
        var form = e.target;
        e.preventDefault();
        var sol = "sol=" + form.sol.value;
        marsService.search(sol, drawPhotos)
        form.reset();
    }

    // marsService.search('', drawPhotos);

} // end of controller constructor