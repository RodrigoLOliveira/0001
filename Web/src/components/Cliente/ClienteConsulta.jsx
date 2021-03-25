import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import {Messages} from 'primereact/messages';
import { Growl } from 'primereact/growl';
import { ClienteService } from '../../service/ClienteService';

export class ClienteConsulta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anuncios: []
        }        
        this.showError = this.showError.bind(this);
        
        /* Específico da página */
        this.service = new ClienteService();
        this.deleteItem = this.deleteItem.bind(this);
        this.messages = new Messages();

    }
    componentDidMount() {
        this.service.getAll(this);
        console.log(this.state);
    }

    showError(summary,detail) {
        let msg = { severity: 'error', summary: summary, detail: detail };
        this.messages.show(msg);
    }

    changeHandler = event => {      
        const name = event.target.name;
        const value = event.target.value;      
        this.setState({[name]: value});
    }
    /*****FIM Métodos Obrigatórios */

    actionDataTable(rowData, column) {
        return (<div>

            <Button label="EXCLUIR" 
          className="p-button-danger p-button-raised" 
          icon="pi pi-times" 
          onClick={() => this.deleteItem(rowData)}
          style={{margin: '3px'}}/>

            <Button label="EDITAR" 
          className="p-button-normal p-button-raised" 
          icon="pi pi-pencil" 
          onClick={() => this.editItem(rowData)}
          style={{margin: '3px'}}/>
         
        </div>);
    }

    deleteItem(rowData) {
        this.anuncioService.delete(this, rowData.id);
        
    }

    editItem(rowData){
        window.location.replace('http://localhost:3000/#/clientecadastro/?id='+rowData.id);
    }

    render() {
        return (
            ""
        );
    }
}