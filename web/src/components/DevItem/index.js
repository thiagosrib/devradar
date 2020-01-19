import React, {Component} from 'react';

import './style.css';

// export default function DevItem() {
export default class DevItem extends Component {
  render() {
    const { dev } = this.props;
    return (
      <li className="dev-item">
        <header>
          <img src={dev.avatar_url} alt={dev.name}/>
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
      </li>
    );
  }
}