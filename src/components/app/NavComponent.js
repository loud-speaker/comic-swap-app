const NavComponent = React.createClass({
	render: function() {
		return (
      <Fragment>

        
      </Fragment>
			<nav>
				<div className="navWide">
					<div className="wideDiv">
          <nav id="nav-ul">
          {user &&
              <NavLink to="/">Comics&nbsp;</NavLink>
              &nbsp;
              <NavLink to="/" onClick={this.handleLogout}>Logout</NavLink>
              &nbsp;
              <NavLink to="/swap">Swap</NavLink>
              &nbsp;
              <NavLink to="/me">Dashboard</NavLink>

          }
          &nbsp;
          <NavLink to="/about">About</NavLink>
        </nav>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="#" onClick={this.burgerToggle}>Link 1</a>
						<a href="#" onClick={this.burgerToggle}>Link 2</a>
						<a href="#" onClick={this.burgerToggle}>Link 3</a>
					</div>
				</div>
			</nav>
		);
	},
	burgerToggle: function() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
});

ReactDOM.render(<NavComponent />, document.querySelector('navbar'));