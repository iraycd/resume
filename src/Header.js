import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.toggleHeader = this.toggleHeader.bind(this)
  }

  toggleHeader() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const activeMenu = this.state.showMenu ? 'active' : ''
    return (
      <div id="header">
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-8 slideInLeft">
                <div className="logo">
                  <span className="point">Ray</span>
                </div>
              </div>
              <div className="col-md-9 hidden-sm hidden-xs slideInRight">
                <div className="main-menu">
                  <ul className="list-inline">
                    <li>
                      <a href="#hello">Hello</a>
                    </li>
                    <li>
                      <a href="#skills">Skills</a>
                    </li>
                    <li>
                      <a href="#experience">Experience</a>
                    </li>
                    <li>
                      <a href="#awards">Awards</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-4 hidden-lg hidden-md slideInRight">
                <div className="mobile-btn" onClick={this.toggleHeader}>
                  <span>
                    <i className="mdi mdi-menu" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className={ `${activeMenu} mob-menu-wrapper`} >
          <div className="close-mob-menu" onClick={this.toggleHeader}>
            <span>
              <i className="mdi mdi-close"  aria-hidden="true" />
            </span>
          </div>
          <div className="mobile-menu">
            <ul>
              <li>
                <a href="#hello">Hello</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#awards">Awards</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
