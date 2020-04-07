import React from 'react';


const Repository = ({ repo }) => (

    <div className="card card-body mb-2">
        <div className="row text-mo-center">
            <div className="col-md-6">
                <a href={repo.html_url} target="_blank">{repo.name}</a>
            </div>
            <div className="col-md-6">
                <span className="badge badge-primary ml-3"> Stars: { repo.stargazers_count }</span>
                <span className="badge badge-success ml-3"> Watch: { repo.watchers_count }</span>
                <span className="badge badge-secondary ml-3"> Forks: { repo.forks_count }</span>
            </div>
        </div>
    </div>

)

export default Repository