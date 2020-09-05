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
                  <h4>I'm <span class="highlight">Elvis</span>, a 25 years old just graduated computer engineer <span class="highlight">working with data</span> and wanting to express myself over some web development self taught. </h4>
                  <h4>
                  Thus, I've created <Link class='lab' to='/laboratory'>my laboratory</Link>, a place for experimenting without rules. Also, I'm active on those social medias below.
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
                <h4>Sou <span class="highlight">Elvis</span>, um engenheiro de computação de 25 anos recém formado <span class="highlight">trabalhando com dados</span> e tentando me expressar com desenvolvimento web autodidata. </h4>
                <h4>
                 Assim, criei <Link class='lab' to='/laboratory'>meu laboratório</Link>, um lugar para que eu possa experimentar sem regras. Também sou ativo nas redes sociais abaixo. 
                </h4>
            </div>        
        </Layout>
      </div>
    )
  }
}

export default IndexPage