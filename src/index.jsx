// Dependencies
import React from 'react';  
import ReactDOM from 'react-dom';


import './libs/materialize-src/js/bin/materialize.js'
import './libs/materialize-src/sass/materialize.scss'


// Components
// import App from './components/app/App.jsx';

// Styles
// import './index.scss';

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                 <ul className="collapsible" data-collapsible="accordion">
    <li>
      <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
      <div className="collapsible-body"><span>Yolo.</span></div>
    </li>
  </ul>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));  