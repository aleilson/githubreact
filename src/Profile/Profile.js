import React from 'react';

const Profile = ({ user }) => (

    <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top"  src={ user.avatar_url } />
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                Repositórios:
                <span className="ml-3 badge badge-success">{ user.public_repos }</span>
            </li>
            <li className="list-group-item">
                Seguindo:
                <span className="ml-3 badge badge-success">{ user.following }</span>
            </li>
            <li className="list-group-item">
                Seguidores:
                <span className="ml-3 badge badge-success">{ user.followers }</span>
            </li>
        </ul>
        <div className="card-body">
            <a className="btn btn-success btn-block" target="_blank" href={user.html_url}>Ver Perfil</a>
        </div>
    </div>

)

export default Profile;