import Hero from "../components/Home/Hero";
import Instructor from "../components/Home/Instructor";
import Stats from "../components/Home/Stats";

const Home = () => {
    return (
        <div className="bg-slate-50">
            <Hero></Hero>
            <Stats></Stats>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;