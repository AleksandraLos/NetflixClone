import '../Home/Home.css'
const Home = () => {
    return (
        <>
            <div className="container">
                <nav class="navbar bg-light px-3 mb-3">
                    <a class="navbar-brand" href="#">Netflix</a>
                    <ul class="nav nav-pills">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle btn btn-outline-primary" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Svenska</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#scrollspyHeading3">Svenska</a></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading4">Engelska</a></li>
                            </ul>
                        </li>
                        <li class="nav-item bg-danger">
                            <a class="nav-link text-light" href="#scrollspyHeading2">Logga in</a>
                        </li>
                    </ul>
                </nav>
                <div class="px-4 py-5 my-5 text-center">
                    <h1 class="display-5 fw-bold text-light">Obegränsat med filmer, serier och annat.</h1>
                    <h2 class="text-light">Titta var du vill. Avsluta när du vill.</h2>
                    <h3 class="text-light">Redo att börja titta? Ange din e-postadress för att skapa eller återaktivera ett konto.</h3>
                    <div class="col-lg-6 mx-auto">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-primary bg-danger text-light" type="button" id="button-addon2">Komi igång</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;