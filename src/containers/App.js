// Import deps
import React from 'react';

// Import components
import Nav from '../components/Nav';
import Section from '../components/Section';
import Home from '../components/Home';

// Import Styles
import '../../scss/app.scss';

const blockList = [
  {
    title: 'Home',
    id: 'home',
    url: ''
  },
  {
    title: 'Music',
    id: 'music',
    url: '#music'
  },
  {
    title: 'Gigs',
    id: 'gigs',
    url: '#gigs'
  },
  {
    title: 'Merch',
    id: 'merch',
    url: '#merch'
  },
  {
    title: 'Blog',
    id: 'blog',
    url: '#blog'
  },
  {
    title: 'Contact',
    id: 'contact',
    url: '#contact'
  }
];

// Main App Componenet - Loads in the nav and the blocks
class App extends React.Component {
  render() {
    return (
      <div id="id" className="app">
        <Nav blockList={blockList} />
        <Section sectionId="home">
          <Home />
        </Section>
      </div>
    );
  }
}

export default App;
