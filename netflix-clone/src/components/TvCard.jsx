const Card = () => {
    return (<>
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5 p-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <video class="our-story-card-video" data-uia="our-story-card-video" autoPlay="" playsInline="" muted="" loop=""><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" /></video>
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">Titta på din tv.</h1>
                <p class="lead">Titta på smart-tv-apparater, Playstation, Xbox, Chromecast, Apple TV, Blu-ray-spelare och många fler.</p>
 
            </div>
        </div>
    </>);
}

export default Card;