import { ApiClient } from '../AxiosInstance';
import { ApiExternalClient } from '../AxiosExternalInstance';

let client = new ApiClient();
let externalClient = new ApiExternalClient();

export class ClienteService {

    get(_this, id) {
        return client.get('/anuncio/' + id)
            .then(res => res.data)
            .then(data => {
                _this.setState({ id: data.id });
                _this.setState({ marcaId: data.marcaId });
                _this.setState({ marca: data.marca });
                _this.setState({ modeloId: data.modeloId });
                _this.setState({ modelo: data.modelo });
                _this.setState({ versaoId: data.versaoId });
                _this.setState({ versao: data.versao });
                _this.setState({ ano: data.ano });
                _this.setState({ quilometragem: data.quilometragem });
                _this.setState({ observacao: data.observacao });
                _this.setState({ listaMarcas: data.listaMarcas });
                _this.setState({ listaModelos: data.listaModelos });
                _this.setState({ listaVersoes: data.listaVersoes });
                this.getMarca(_this, null);
                this.getModelo(_this, null, data.marcaId);
                this.getVersao(_this, null, data.modeloId);
                return data;
            }).catch(error => {
                if (error.response === undefined) {
                    _this.showError("Erro", "Não foi possível consultar.")
                } else {
                    _this.showError("Erro", "Não foi possível consultar. Detalhes: " + error.response.data.message)
                }
            });
    }

    getAll(_this) {
        return client.get('/anuncio')
            .then(res => res.data)
            .then(data => {
                _this.setState({ anuncios: data });
                return data;
            }).catch(error => {
                if (error.response === undefined) {
                    _this.showError("Erro", "Não foi possível listar.")
                } else {
                    _this.showError("Erro", "Não foi possível listar. Detalhes: " + error.response)
                }
            });
    }

    post(_this) {
        return client.post('/anuncio', _this.state)
            .then(res => res.data)
            .then(data => {
                _this.consultar();
                return data;
            }).catch(error => {
                if (error.response === undefined) {
                    _this.showError("Erro", "Não foi possível salvar.")
                } else {
                    console.log(error);
                    _this.showError("Erro", "Não foi possível salvar. Detalhes: " + Object.values(error.response.data))
                }
            });
    }

    put(_this) {

    }

    delete(_this, id) {

    }

}