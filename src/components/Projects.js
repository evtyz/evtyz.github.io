import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Project from './Project'

const projects = require("../projects.json")

var projectLayout = []

function loadProjects(item, index)
{
    projectLayout.push(<Project info={item} />)
}

function Projects()
{
    projectLayout = []

    projects.forEach(loadProjects);

    return (
        <div>
            <h2>featured work</h2>
            {projectLayout}
        </div>
    );
}

export default Projects;