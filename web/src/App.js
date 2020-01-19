import React, { Component } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { devs: [] };

    this.handleAddDev = this.handleAddDev.bind(this);
    this.loadDev = this.loadDev.bind(this);
  };

  async loadDev() {
    const response = await api.get('/devs');

    this.setState({ devs: response.data });
  };

  async componentDidMount() {
      await this.loadDev();
  };

  async handleAddDev(data) {
    const { devs } = this.state;

    const response = await api.post('/devs', data);

    this.setState({ devs: [ ...devs , response.data ] });
  };

  render() {
    return (
        <div id="app">
          <aside>
            <strong>Cadastrar</strong>
            <DevForm onSubmit={this.handleAddDev} />
          </aside>

          <main>
            <ul>
              {this.state.devs.map(dev => (
                <DevItem dev={dev} key={dev._id} />
              ))}
            </ul>
          </main>
        </div>
      );
  }
}

export default App;
