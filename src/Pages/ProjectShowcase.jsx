import { useEffect } from "react";
import { useState } from "react";
import Projects from "../components/Projects/Projects";


const ProjectShowcase = () => {
    const [projects,setProjects] = useState();
    useEffect(() => {
        fetch('projects.json')
        .then(response => response.json())
        .then(data => setProjects(data))
    },[])
    console.log(projects)
    return (
        <div className="pt-36 ml-10 grid md:grid-cols-3 gap-6 md:px-36">

            {
                projects?.map(project => <Projects
                key={project.id}
                project={project}
                ></Projects>)
            }


            
        </div>
    );
};

export default ProjectShowcase;