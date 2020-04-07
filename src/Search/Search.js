import React, { Component } from 'react';
import Axios from 'axios';
import Profile from '../Profile/Profile'
import Repository from '../Repository/Repository'

class Search extends Component {
    constructor(){
        super();
        this.state = {
            github: {
                url: "https://api.github.com/users",
                client_id: "2d42b1fb696c80b5c67f",
                client_secret: "4f6cba2079ca5265bdc053983e96baeed251417a",
                count: 7,
                sort: "created: asc"
            },
            user: [],
            repos: [],
            errorMessage: ""
        }
    }
   
    getUser = (e) =>{
        const user = e.target.value
        const { url, client_id, client_secret, count, sort } = this.state.github;
        
        setTimeout(() => {
            Axios.get( `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
            )
            .then(({ data }) => {
                this.setState({ user: data })
                this.setState({errorMessage: ""})
            })
            .catch((error) => {
                this.setState({errorMessage: "Usuário não encontrado!"})
            })
            
            Axios.get(`${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
            )
            .then(({ data }) => this.setState({ repos: data }))
            
        }, 1000);
    }

    renderProfile = () => {
        const { user, repos, errorMessage } = this.state;

        return (
            <main className="mt-3">
                <div className="row">
                    <div className="col-md-4">
                        {errorMessage === "" ? <Profile user={user} /> : errorMessage }
                    </div>

                    <div className="col-md-8 repositories">
                        {errorMessage === "" ? repos.map(repo => <Repository  key={repo.name}  repo={repo} />) : ""}
                    </div>
                </div>
            </main>
        )
    }

    render(){
        return (
            <section className="find">
                <div className="container">
                    <div className="card card-body">
                        <h1>Informe um Usuário do Github</h1>
                        <p className="lead">Para ver seu perfil e repositórios</p>
                        <input onChange={this.getUser} id="search" type="text" className="form-control" required />
                    </div>

                    { this.state.user.length !== 0 ? this.renderProfile(): null }
                </div>
            </section>
        )
    }
}
    
export default Search;