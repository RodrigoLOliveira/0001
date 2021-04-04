import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';
import { Growl } from 'primereact/growl';
import { ClienteService } from '../../service/ClienteService';
import { InputText } from 'primereact/inputtext';

export class ClienteConsulta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientes: [],
            search: ''
        }
        this.showError = this.showError.bind(this);

        /* Específico da página */
        this.service = new ClienteService();
        this.deleteItem = this.deleteItem.bind(this);
        this.messages = new Messages();

    }
    componentDidMount() {
        this.service.getAll(this, "");
        console.log(this.state);
    }

    showError(summary, detail) {
        let msg = { severity: 'error', summary: summary, detail: detail };
        this.messages.show(msg);
    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }
    /*****FIM Métodos Obrigatórios */

    actionDataTable(rowData, column) {
        return (<div>

            <Button label="EXCLUIR"
                className="p-button-danger p-button-raised"
                icon="pi pi-times"
                onClick={() => this.deleteItem(rowData)}
                style={{ margin: '3px' }} />

            <Button label="EDITAR"
                className="p-button-normal p-button-raised"
                icon="pi pi-pencil"
                onClick={() => this.editItem(rowData)}
                style={{ margin: '3px' }} />

        </div>);
    }

    deleteItem(rowData) {
        if (window.confirm("Deseja realmente excluir cliente " + rowData.name)) {
            this.service.delete(this, rowData.id);
            document.location.reload(true);
        }
    }

    editItem(rowData) {
        window.location.replace('http://localhost:3000/#/clienteeditar/?id=' + rowData.id);
    }

    createItem() {
        window.location.replace('http://localhost:3000/#/clientecadastro/');
    }

    searchCliente() {
        this.service.getAll(this, this.state.search)
            .then(res => {
                console.log(res.data)
                this.setState({ clientes: res.data })
            });
    }

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Clientes</h1>

                        <div style={{ display: 'flex', paddingTop: '20px' }}>
                            <Button label="Cadastrar cliente" onClick={this.createItem} />

                            <div className="col-12 md-4" style={{ marginLeft: '12px' }}>
                                <div className="p-inputgroup p-float-label">
                                    <InputText id="in" value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} />
                                    <label htmlFor="in">Email do cliente...</label>
                                    <Button icon="pi pi-search" onClick={() => this.searchCliente()} className="p-button-primary" />
                                </div>
                            </div>
                        </div>


                        <DataTable value={this.state.clientes} style={{ marginTop: 10 }}>
                            <Column field="name" header="Nome do cliente"></Column>
                            <Column field="website" header="Website"></Column>
                            <Column field="company.name" header="Nome da companhia"></Column>
                            <Column field="email" header="Email"></Column>
                            <Column header="Ações" body={(x) => this.actionDataTable(x)}></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        );
    }
}