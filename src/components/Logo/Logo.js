import Tilt from "react-tilt";
import LogoImg from './Logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 145, width: 145 }} >
                <div className="Tilt-inner">
                    <img src={LogoImg} alt="logo" srcset="" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;