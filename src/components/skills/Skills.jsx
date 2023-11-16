import "./skills.scss";
import Skill from "./Skill"; // Import the Skill component

function Skills() {
    return (
        <div className="skills" id="skills">
            <h2>Skills</h2>
            <div className="skillsGrid">

                <div className="category">
                    <h2>Sistemas Operativos</h2>
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="The logo icon for linux" title="Linux" />
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="The logo icon for windows" title="windows" />
                </div>

                <div className="category">
                    <h2>Lenguajes de Programacion</h2>
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="The logo icon for java" title="Java" />
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="The logo icon for python" title="Python" />
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="The logo icon for bash" title="Bash" />
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React" />

                </div>

                <div className="category">
                    <h2>Base de Datos</h2>
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="The logo icon for mysql" title="Mysql" />
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="The logo icon for postgres" title="Postgress" />
                </div>


                <div className="category">
                    <h2>Servicios enla nube</h2>
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="The logo icon for aws" title="Aws" />
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg" alt="The logo icon for kubernetes" title="Kubernetes" />
                </div>


                <div className="category">
                    <h2>Gestionar Proyectos</h2>
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub" />
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" alt="The logo icon for GitLab" title="GitLab" />
                </div >
            </div >
        </div >
    )
}

export default Skills;