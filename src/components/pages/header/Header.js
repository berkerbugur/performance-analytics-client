import './header.sass';
import gitboy from '../../../assets/github.png';
import gear from '../../../assets/gear.png'
import {githubAcc} from '../../../utilities/constants';

const Header = () => {
    return (
        <div className="header">
            <h2>Performance Analyzer</h2>
            <img className='gear' src={gear} alt="gear"/>
            <a className="link" target="_blank" rel="noopener noreferrer" href={githubAcc}><img src={gitboy} alt="github"/></a>
        </div>
    );
}

export default Header;