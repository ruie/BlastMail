import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

   renderLink = () => {
      switch(this.props.auth) {
         case null:
            return;
         case false:
            return  <li><a href="/auth/google">Login with Google</a></li>;
         default:
            return [
              <li key="1"><a>Add Credits</a></li>,
              <li key="2"><a href="/api/logout">Logout</a></li>
            ];
      }
   }

   render() {
      console.log(this.props)
      return (
      <nav>
         <div className="nav-wrapper">
            <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">Emaily</Link>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderLink()}
         </ul>
         </div>
      </nav>
      );
   }

}

const mapStateToProps = ({ auth }) => {
   return { auth };
}

export default connect(mapStateToProps, null)(Header);
