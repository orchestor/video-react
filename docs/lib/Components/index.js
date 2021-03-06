import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const ComponentLink = (props) => {
  return (
    <NavItem>
      <NavLink tag={Link} to={props.item.to} activeClassName="active">
        {props.item.name}
      </NavLink>
    </NavItem>
  );
};
const propTypes = {
  children: React.PropTypes.node
};

class Components extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Player',
          to: '/components/player/'
        },
        {
          name: 'Shortcut',
          to: '/components/shortcut/',
        },
        {
          name: 'BigPlayButton',
          to: '/components/big-play-button/',
        },
        {
          name: 'PosterImage',
          to: '/components/poster-image/',
        },
        {
          name: 'LoadingSpinner',
          to: '/components/loading-spinner/'
        },
        {
          name: 'ControlBar',
          to: '/components/control-bar/'
        },
        {
          name: 'PlayToggle',
          to: '/components/play-toggle/'
        },
        {
          name: 'ReplayControl',
          to: '/components/replay-control/',
        },
        {
          name: 'ForwardControl',
          to: '/components/forward-control/',
        },
        {
          name: 'VolumeMenuButton',
          to: '/components/volume-menu-button/',
        },
      ]
    };
  }
  render() {
    return (
      <Container fluid className="content">
        <Row>
          <Col md={{ size: 3, push: 9 }}>
            <div className="docs-sidebar mb-3">
              <h5>Components</h5>
              <Nav>
                {this.state.navItems.map((item, i) => {
                  return <ComponentLink key={i} item={item} />;
                })}
              </Nav>
            </div>
          </Col>
          <Col md={{ size: 9, pull: 3 }}>
            {this.props.children}
          </Col>
        </Row>
      </Container>
    );
  }
}
Components.propTypes = propTypes;
export default Components;
