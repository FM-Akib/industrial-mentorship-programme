import Hero from "../components/Home/Hero";
import Instructor from "../components/Home/Instructor";
import Stats from "../components/Home/Stats";
import StorySection from "../components/Home/StorySection";

const Home = () => {
    return (
        <div className="bg-slate-50 ">
            <Hero></Hero>
            <Stats></Stats>
            <Instructor></Instructor>
            <StorySection></StorySection>
        </div>
    );
};

export default Home;