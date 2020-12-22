import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";

const Footer = () => {
	return (
		<footer>
			<Navbar variant="dark" bg="primary">
				<Container>
					<Row>
						<Col className="text-center py-3">Copyright &copy; FriendList</Col>
					</Row>
				</Container>
			</Navbar>
		</footer>
	);
};

export default Footer;
