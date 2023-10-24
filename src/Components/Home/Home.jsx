import Contact from "../Contact/Contact";
import Customer from "../Customer/Customer";
import Facilities from "../Facilities/Facilities";
import Services from "../Services/Services";
import Team from "../Team/Team";
import About from "./About";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Team></Team>
            <Facilities></Facilities>
            <Customer></Customer>
        </div>
    );
};

export default Home;