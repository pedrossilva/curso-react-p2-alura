import React, { Component } from 'react'

class Foto extends Component {
  render() {
    const { foto } = this.props
    return (
      <div className="foto">
        <FotoHeader foto={foto}/>
        <img alt="foto" className="foto-src"
             src={foto.urlFoto}/>
        <FotoInfo foto={foto}/>
        <FotoAtualizacoes/>
      </div>
    )
  }
}

class FotoHeader extends Component {
  render() {
    const { foto } = this.props
    return (
      <header className="foto-header">
        <figure className="foto-usuario">
          <img
            src={foto.urlPerfil}
            alt="foto do usuario"/>
          <figcaption className="foto-usuario">
            <a href="#">
              {foto.loginUsuario}
            </a>
          </figcaption>
        </figure>
        <time className="foto-data">{foto.horario}</time>
      </header>
    )
  }
}

class FotoInfo extends Component {
  render() {
    const { foto } = this.props
    return (
      <div className="foto-info">
        <div className="foto-info-likes">
          {foto.likers.map(liker => <a href="#">{liker.login},</a>)}
          {!foto.likers.length || 'curtiram'}
        </div>

        <p className="foto-info-legenda">
          <a className="foto-info-autor">autor </a>
          {foto.comentario}
        </p>

        <ul className="foto-info-comentarios">
          {foto.comentarios.map(comentario => (
            <li className="comentario">
              <a className="foto-info-autor">{comentario.login} </a>
              {comentario.texto}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

class FotoAtualizacoes extends Component {
  render() {
    return (
      <section className="fotoAtualizacoes">
        <a href="#" className="fotoAtualizacoes-like">Likar</a>
        <form className="fotoAtualizacoes-form">
          <input type="text" placeholder="Adicione um comentário..."
                 className="fotoAtualizacoes-form-campo"/>
          <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
        </form>

      </section>
    )
  }
}

export default Foto