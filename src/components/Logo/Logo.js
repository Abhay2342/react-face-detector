import Tilt from "react-tilt";
import LogoImg from './Logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt5">
            <Tilt className="Tilt br2 shadow-2 center" options={{ max: 55 }} style={{ height: 145, width: 145 }} >
                <div className="Tilt-inner">
                    <img src={LogoImg} alt="logo"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;