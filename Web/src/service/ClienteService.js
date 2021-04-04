import { ApiClient } from '../AxiosInstance';
import { ApiExternalClient } from '../AxiosExternalInstance';

let client = new ApiClient();
let externalClient = new ApiExternalClient();

export class ClienteService {

    get(_this, id) {
        return client.get('/cliente/' + id)
            .then(res => res.data)
            .then(data => {
                const cliente = data.data
                return cliente;
            }).catch(error => {
                if (error.response === undefined) {
                    _this.showError("Erro", "Não foi possível consultar.")
                } else {
                    _this.showError("Erro", "Não foi possível consultar. Detalhes: " + error.response.data.message)
                }
            });
    }

    searchByEmail(_this, email){
        return client.get('/search?email=' + email)
        .then(res => res.data)
            .then(data => {
                const cliente = data.data;
                return cliente;
            })
            .catch(err => {
                if (err.response === undefined) {
                    _this.showError("Erro", "Não foi possível listar.")
                } else {
                    _this.showError("Erro", "Não foi possível listar. Detalhes: " + err.response)
                }
            })
    }

    getAll(_this, busca) {
        return client.get('/cliente?clienteEmail=' + busca)
            .then(res => res.data)
            .then(data => {
                const cliente = data.data
                _this.setState({clientes: cliente});
                return data;
            }).catch(error => {
                if (error.response === undefined) {
                    _this.showError("Erro", "Não foi possível listar.")
                } else {
                    _this.showError("Erro", "Não foi possível listar. Detalhes: " + error.response)
                }
            });
    }

    post(_this, submitdata) {
        return client.post('/cliente', submitdata)
            .then(res => res.data)
            .then(data => {
                return data;
            }).catch(error => {
                if (error.response === undefined) {
                    _this.showError("Erro", "Não foi possível salvar.")
                } else {
                    console.log(error);
                    _this.showError("Erro", "Não foi possível salvar. Detalhes: " + Object.values(error.response.data))
                }
                return error.response;
            });
    }

    put(_this, id, submitdata) {
        return client.put('/cliente/' + id, submitdata)
        .then(res => res.data)
        .then(data => {
            return data;
        })
        .catch(error => {
            if (error.response === undefined) {
                _this.showError("Erro", "Não foi possível salvar.")
            } else {
                console.log(error);
                _this.showError("Erro", "Não foi possível salvar. Detalhes: " + Object.values(error.response.data))
            }
            return error.response;
        });
    }

    delete(_this, id) {
        return client.delete('/cliente/' + id)
        .then(res => res.data)
        .then(data => {
            return data;
        })
        .catch(error => {
            if (error.response === undefined) {
                _this.showError("Erro", "Não foi possível salvar.")
            } else {
                console.log(error);
                _this.showError("Erro", "Não foi possível salvar. Detalhes: " + Object.values(error.response.data))
            }
            return error.response;
        });
    }

}