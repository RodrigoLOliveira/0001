import React, {Component} from 'react';

export class Login extends Component {

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Login</h1>
                        <p>Você não está logado.</p>
                    </div>
                </div>
            </div>
        );
    }
}