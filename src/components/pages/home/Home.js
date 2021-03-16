import './home.sass';
import Analytics from "../analytics/Analytics";
import Header from "../header/Header";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Analytics />
        </div>
    );
}

export default Home;