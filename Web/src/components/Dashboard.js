import React, { Component } from 'react';

export class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            
        };

    }

    componentDidMount() {
        
    }

    render() {        
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Cadastro de Clientes</h1>
                        <p>Use o menu ao lado para executar as operações.</p>
                    </div>
                </div>
            </div>
        );
    }
}