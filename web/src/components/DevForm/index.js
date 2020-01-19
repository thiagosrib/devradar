import React, {Component} from 'react';

import './style.css';

export default class DevItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      github_username: '',
      techs: '',
      latitude: '',
      longitude: '',
    }
  
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        this.setState({ latitude: latitude, longitude: longitude });
      },
      (error) => {
        console.log('error', error);
      },
      {
        timeout: 30000,
      });
  };

  async handleSubmit(e) {
    const {
      github_username,
      techs,
      latitude,
      longitude,
    } = this.state;

    e.preventDefault();

    await this.props.onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    this.setState({ github_username: '', techs: '' });
  }

  render() {
    const {
      github_username,
      techs,
      latitude,
      longitude,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do GitHub</label>
          <input 
            name="github_username"
            id="github_username"
            required
            value={github_username}
            onChange={e => this.setState({ github_username: e.target.value })}
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input
            name="techs"
            id="techs"
            required
            value={techs}
            onChange={e => this.setState({ techs: e.target.value })}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
              type="number"
              name="latitude"
              id="latitude"
              required
              value={latitude}
              onChange={e => this.setState({ latitude: e.target.value })}
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude ">Longitude</label>
            <input
              type="number"
              name="longitude"
              id="longitude"
              required
              value={longitude}
              onChange={e => this.setState({ longitude: e.target.value })}
            />
          </div>
        </div>

        <button type="submit">Salvar</button>
      </form>
    );
  }
}