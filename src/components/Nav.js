// Import deps
import React from 'react';

// Import components
import NavItem from './NavItem';

// Filter out nav items without URLs
const isNotLink = item => item.url !== '';

// Header Componenet - Displays header and renders navigation from blockList object
class Nav extends React.Component {
    // Set state
    constructor(props) {
        super(props);

        this.state = {
            className: ''
        };

        this.handleScroll = this.handleScroll.bind(this);
    }
    // Define scroll event listeners
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    // Handle Scroll Function
    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;
        // TODO: Add ES6 nicer conditional
        if (scrollTop > 300) {
            this.setState({ className: ' c-navigation--fixed' });
        } else {
            this.setState({ className: '' });
        }
    }

    render() {
        const { className } = this.state;
        const { sectionList } = this.props;

        return (
            <header>
                <ul className={'c-navigation ' + className}>
                    {sectionList
                        .filter(isNotLink)
                        .map(item => (
                            <NavItem url={item.url} title={item.title} />
                        ))}
                </ul>
            </header>
        );
    }
}

export default Nav;
