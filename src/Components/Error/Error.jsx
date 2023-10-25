import error from '../../assets/images/error/Screenshot 2023-10-24 202834.png'
import Navbar from '../Navbar/Navbar';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img src={error} alt="" />
        </div>
    );
};

export default Error;