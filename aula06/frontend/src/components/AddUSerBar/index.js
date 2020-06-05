import React,{Component} from 'react';
import './index.css';

export default class AdduserBar extends Component{
    render(){
        return(
            <div className='addUSerBar-container'>
                <span>Cadastro de desenvolvedor</span>
                <button type='submit'>Cadastrar</button>

                <span>Informações</span>
                <p>
                    Este é um app desenvolvido durante o curso de ReactJS com o 
                    objetivo de cadastrar desenvolvedores do GitHub para que os mesmos 
                    possam encontrar vagas de emprego.
                </p>
            </div>
        )
    }
}