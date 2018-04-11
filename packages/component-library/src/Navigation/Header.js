import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { css } from 'emotion';
import Nav from './Nav';
import Logo from '../Logo/LogoAnimated';
import Icon from '../Icon/Icon';
import { ICONS } from '../styleConstants';

const primaryColor = 'rgb(34, 15, 37)';

const containerClass = css`
  width: 100%;
  min-width: 320px;
`;

const overlayContainerClass = css`
  ${containerClass};
  position: fixed;
`;

const headerClass = css`
  background-color: ${primaryColor};
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 320px;
  margin: 0 auto;
  padding: 1rem 0;
`;

const overlayHeaderClass = css`
  ${headerClass};
  background-color: transparent;
`;

const navClass = css`
  margin: 0 30px 0 0;
  display:block;

  @media (max-width: 640px) {
    &.active {
      display:block;
    }

    &.inactive {
      display:none;
    }
  }
`;

const logoClass = css`
  margin: 1rem 0 0 2rem;
  flex: 2;
`;

const logoLinkClass = css`
  border: none;
  opacity: 1;
  transition: none;
`;

const burgerClass = css`
  a& {
    display: none;
    padding: 2rem;
    border: none;

    @media (max-width: 640px) {
      display:block;
    }
  }
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuActive: false,
    };
  }

  togglesNestedMenu = () => this.setState({ menuActive: !this.state.menuActive })

  render() {
    const { children, menu, title, overlay } = this.props;
    return (
      <div className={overlay ? overlayContainerClass : containerClass}>
        <nav className={overlay ? overlayHeaderClass : headerClass}>
          <div className={logoClass}>
            <Link className={logoLinkClass} to="/"><Logo alt={title} /></Link>
          </div>
          <div className={`${navClass} ${this.state.menuActive ? 'active' : 'inactive'}`}>
            <Nav
              menu={menu}
              toggleSubNav={this.togglesNestedMenu}
              showNestedMenu={this.state.nestedMenu}
              togglesNestedMenu={this.togglesNestedMenu}
            />

            { children }
          </div>
          <a className={burgerClass}>
            <Icon
              key="nav-burger"
              className={`${ICONS.hamburger}`}
              handleClick={this.togglesNestedMenu}
            />
          </a>
        </nav>
      </div>
    );
  }

}

Header.displayName = 'Header';
Header.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
  children: PropTypes.node,
  overlay: PropTypes.bool,
};

export default Header;
