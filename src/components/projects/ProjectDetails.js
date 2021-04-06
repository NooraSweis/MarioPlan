import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Instead of having a css folder, you will find that the download instead contains many .scss files which contain the styles of individual components. Unfortunately, the browser cannot interpret Sass, so you must have your Sass compiler compile the scss/materialize.scss into a regular CSS file. At this point you can link this newly outputted file in your HTML page.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Noora Sweis</div>
                    <div>12, April 2021</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
