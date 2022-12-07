import '../Home/Home.css'
import Card from '../../components/TvCard'
import OfflineCard from '../../components/OfflineCard';
import AllCard from '../../components/AllCard';
import ChildCard from '../../components/ChildCard';
import QA from '../../components/QA';
const Home = () => {
    return (<>
        <>
                <nav class="navbar px-3 mb-3 mt-3">
                    <a class="" href="#"><img className='logo-img' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=""  /></a>
                    <ul class="nav nav-pills">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Svenska</a>
                            <ul class="dropdown-menu ">
                                <li><a class="dropdown-item text-light" href="#scrollspyHeading3">Svenska</a></li>
                                <li><a class="dropdown-item text-light" href="#scrollspyHeading4">Engelska</a></li>
                            </ul>
                        </li>
                        <li class="nav-item bg-danger">
                            <a class="nav-link text-light" href="#scrollspyHeading2">Logga in</a>
                        </li>
                    </ul>
                </nav>
                <div class="px-4 py-5 my-5 text-center border-bottom">
                    <h1 class="display-5 fw-bold text-light">Obegränsat med filmer, serier och annat.</h1>
                    <h2 class="text-light">Titta var du vill. Avsluta när du vill.</h2>
                    <p class="text-light fw-bold">Redo att börja titta? Ange din e-postadress för att skapa eller återaktivera ett konto.</p>
                    <div class="col-lg-6 mx-auto">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="E-postadress" aria-label="E-postadress" aria-describedby="button-addon2" />
                            <button class="btn bg-danger text-light" type="button" id="button-addon2">Kom igång</button>
                        </div>
                    </div>
                </div>
        </>
        <Card />
        <OfflineCard/>
        <AllCard/>
        <ChildCard/>
        <QA/>
        </>
    );
}

export default Home;