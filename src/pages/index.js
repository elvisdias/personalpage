import React from "react"
import { BsToggleOn, BsToggleOff } from 'react-icons/bs'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import '../styles/index.scss'

class IndexPage extends React.Component {
  constructor(props) {
    super(props); 
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isToggleOn: true
    };

    this.divStyle = {
      position: 'absolute',
      top: '4rem',
    }

  }
  
  handleClick(){
    this.setState(state =>({
      isToggleOn: !state.isToggleOn
    }))
  }

  render(){
    if (this.state.isToggleOn){
      return (
        <div class='parent'>
          <div class='language'>
            <h5 onClick={this.handleClick}>pt  {this.state.isToggleOn ? <BsToggleOn /> : <BsToggleOff />}  en</h5>
          </div>
          <Layout>      
              <Head title="en"/>
              <div style={this.divStyle}>
                  <h4>Hello, </h4> 
                  <h4>I'm a 26 years old computer engineer by formation, currently working as a <span class="highlight">data scientist/software engineer</span> and optimizing myself to learn and express anything I gravitate to. </h4>
                  <h4>
                  This is my home and thus has been thought out to reflect whatever I feel like putting out. For my playground I should be at <Link class='lab' to='/laboratory'>my laboratory</Link> anytime. Also, I'm kind of active on the social medias below.
                  </h4>
              </div>        
          </Layout>
        </div>
      )
    }
    return (
      <div class='parent'>
        <div class='language'>
          <h5 onClick={this.handleClick}>pt  {this.state.isToggleOn ? <BsToggleOn /> : <BsToggleOff />}  en</h5>
        </div>
        <Layout>      
            <Head title="pt"/>
            <div style={this.divStyle}>
                <h4>Olá, </h4> 
                <h4>Sou um engenheiro de computação por formação, tenho 26 anos, atualmente trabalhando como <span class="highlight">cientista de dados/engenheiro de software</span> e me otimizando para conseguir aprender e expressar qualquer coisa que eu me sinta atraído. </h4>
                <h4>
                 Esse é meu lar, e assim, foi pensado para refletir qualquer coisa que eu sinta que deva colocar para o mundo. Para experimentações eu devo estar no <Link class='lab' to='/laboratory'>meu laboratório</Link> a qualquer momento. Também, sou meio que ativo nas redes sociais abaixo. 
                </h4>
            </div>        
        </Layout>
      </div>
    )
  }
}

export default IndexPage