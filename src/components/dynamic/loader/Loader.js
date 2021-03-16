import './loader.sass';
import loader from "../../../assets/loading.svg";

const Loader = (isLoading) => {
    return (
        <div className="loader">
            {isLoading && <img src={loader} className="loader-logo" alt="logo"/>}
        </div>
    );
}

export default Loader;