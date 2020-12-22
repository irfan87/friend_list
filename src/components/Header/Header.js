import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
	return (
		<header>
			<Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand>FriendList</Navbar.Brand>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
