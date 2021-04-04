import React, {Component} from 'react';
import { InputText } from 'primereact/inputtext';
import { Messages } from 'primereact/messages';
import { Button } from 'primereact/button';
import { ClienteService } from '../../service/ClienteService';


export class ClienteCadastro extends Component 
{
    constructor(props)
    {
        super(props)
        
        this.state = {
            Email: "",
            Name: "",
            Username: "",
            Phone: "",
            Website: "",
            Address_Street: "",
            Address_Suite: "",
            Address_City: "",
            Address_Zipcode: "",
            Address_Geo_Lat: "",
            Address_Geo_Lng: "",
            Company_Name: "",
            Company_CatchPhrase: "",
            Company_Bs: ""            
        }
        
        this.showError = this.showError.bind(this);

        /* Específico da página */
        this.service = new ClienteService();
        this.messages = new Messages();

    }

    showError(summary, detail) {
        alert(summary)
    }

    submit(){
        this.service.post(this, {
            "name": this.state.Name,
            "username": this.state.Username,
            "email": this.state.Email,
            "phone": this.state.Phone,
            "website": this.state.Website,
            "address": {
                "street": this.state.Address_Street,
                "suite": this.state.Address_Suite,
                "city": this.state.Address_City,
                "zipcode": this.state.Address_Zipcode,
                    "geo":{
                        "lat": this.state.Address_Geo_Lat,
                        "lng": this.state.Address_Geo_Lng
                    }
            },
            "company": {
                "name": this.state.Company_Name,
                "catchPhrase": this.state.Company_CatchPhrase,
                "bs": this.state.Company_Bs
            }
        }).then(e => {
            if(e.success == true){
                window.location.replace('http://localhost:3000/#/clienteconsulta/');
            }
            else{
                this.showError(e?.message)
            }
        })
    }

    searchClient()
    {
        this.service.searchByEmail(this, this.state.Email)
        .then(cliente => {
            this.setState({
                Email: cliente?.email,
                Name: cliente?.name,
                Username: cliente?.username,
                Phone: cliente?.phone,
                Website: cliente?.website,
                Address_Street: cliente?.address?.street,
                Address_Suite: cliente?.address?.suite,
                Address_City: cliente?.address?.city,
                Address_Zipcode: cliente?.address?.zipcode,
                Address_Geo_Lat: cliente?.address?.geo?.lat,
                Address_Geo_Lng: cliente?.address?.geo?.lng,
                Company_Name: cliente?.company?.name,
                Company_CatchPhrase: cliente?.company?.catchPhrase,
                Company_Bs: cliente?.company?.bs     
            })

            console.log(cliente)
        })
    }

    render(){
        return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <h1>Cadastro de Clientes</h1>
      
                    <h2>Dados gerais</h2>
                    <div className="p-field p-col-6">
                        <label htmlFor="email" className="p-d-block">Email</label><br />
                        <InputText id="email" value={this.state.Email} className="p-d-block w-100" onBlur={() => this.searchClient()} onChange={x => this.setState({Email : x.target.value})} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="nome" className="p-d-block">Nome</label><br />
                        <InputText id="nome" value={this.state.Name} className="p-d-block w-100" onChange={x => this.setState({Name : x.target.value})} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="Username" className="p-d-block">Nome de Usuário</label><br />
                        <InputText id="Username" value={this.state.Username} className="p-d-block w-100" onChange={x => this.setState({UserName : x.target.value})} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="Phone" className="p-d-block">Celular</label><br />
                        <InputText id="Phone" value={this.state.Phone} className="p-d-block w-100" onChange={x => this.setState({Phone : x.target.value})} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="Website" className="p-d-block">Website</label><br />
                        <InputText id="Website" value={this.state.Website} className="p-d-block w-100" onChange={x => this.setState({Website : x.target.value})} />
                    </div>
                    <br />
                    <h2>Endereço</h2>
                    <div className="p-field p-col-6">
                        <label htmlFor="Street" className="p-d-block">Rua</label><br />
                        <InputText id="Street" value={this.state.Address_Street} className="p-d-block w-100" onChange={x => this.setState({Address_Street : x.target.value})} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="Suite" className="p-d-block">Número, Complemento</label><br />
                        <InputText id="Suite" value={this.state.Address_Suite} className="p-d-block w-100" onChange={x => this.setState({Address_Suite : x.target.value})} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="City" className="p-d-block">Cidade</label><br />
                        <InputText id="City" value={this.state.Address_City} className="p-d-block w-100" onChange={x => this.setState({Address_City : x.target.value})} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="Zipcode" className="p-d-block">CEP</label><br />
                        <InputText id="Zipcode" value={this.state.Address_Zipcode} className="p-d-block w-100" onChange={x => this.setState({Address_Zipcode : x.target.value})} />
                    </div>
                    <br />
                    <h2>Localização</h2>
                    <div className="p-field p-col-6">
                        <label htmlFor="Latitude" className="p-d-block">Latitude</label><br />
                        <InputText id="Latitude" value={this.state.Address_Geo_Lat} className="p-d-block w-100" onChange={x => this.setState({Address_Geo_Lat : x.target.value})} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="Longitude" className="p-d-block">Longitude</label><br />
                        <InputText id="Longitude" value={this.state.Address_Geo_Lng} className="p-d-block w-100" onChange={x => this.setState({Address_Geo_Lng : x.target.value})} />
                    </div>
                    <br />
                    <h2>Companhia</h2>
                    <div className="p-field p-col-6">
                        <label htmlFor="CompanyName" className="p-d-block">Nome da companhia</label><br />
                        <InputText id="CompanyName" value={this.state.Company_Name} className="p-d-block w-100" onChange={x => this.setState({Company_Name : x.target.value})} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="CompanyCatchPhrase" className="p-d-block">Frase de efeito</label><br />
                        <InputText id="CompanyCatchPhrase" value={this.state.Company_CatchPhrase} className="p-d-block w-100" onChange={x => this.setState({Company_CatchPhrase : x.target.value})} />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="Bs" className="p-d-block">Segmento</label><br />
                        <InputText id="Bs" value={this.state.Company_Bs} className="p-d-block w-100" onChange={x => this.setState({Company_Bs : x.target.value})} />
                    </div>
                        
                    <div className="p-field p-col-6">
                        <Button  onClick={() => this.submit()} label="Cadastrar cliente" /> 
                    </div>
                   
                    
                </div>
            </div>
        </div>
        )
    }
}