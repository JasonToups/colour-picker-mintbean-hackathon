import React from 'react';
import { Navbar, Form, Nav, FormControl, NavDropdown } from 'react-bootstrap';

const tinycolor = require('tinycolor2');

export default function Settings({
	changeHex,
	changeVariation,
	changeSetting,
	changeSettingValue,
}) {
	const handleHexChange = e => {
		e.preventDefault();
		changeHex(e.target.value);
	};

	const handleVariationChange = variation => {
		changeVariation(variation);
	};

	const changeSettings = e => {
		changeSetting(e);
	};

	const setRandom = () => {
		const randomColor = tinycolor.random().toHexString();
		changeHex(randomColor);
	};

	const handleSettingValueChange = e => {
		changeSettingValue(e);
	};

	return (
		<div>
			<Navbar expand='lg' bg='dark' variant='dark'>
				<Nav className='mr-auto'>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />

					<Navbar.Collapse id='responsive-navbar-nav'>
						<Navbar.Brand>Color Palette Generator</Navbar.Brand>
						<NavDropdown
							onSelect={e => handleVariationChange(e)}
							title='Schemes'
							id='schemes'>
							<NavDropdown.Item eventKey='analogous'>
								Analogous
							</NavDropdown.Item>
							<NavDropdown.Divider />

							<NavDropdown.Item eventKey='monochromatic'>
								Monochromatic
							</NavDropdown.Item>
							<NavDropdown.Divider />

							<NavDropdown.Item eventKey='complement'>
								Complement
							</NavDropdown.Item>
							<NavDropdown.Item eventKey='splitcomplement'>
								Split Complement
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item eventKey='triad'>Triad</NavDropdown.Item>
							<NavDropdown.Item eventKey='tetrad'>Tetrad</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown.Divider />

						<NavDropdown
							onSelect={e => changeSettings(e)}
							title='Adjustments'
							id='adjustments'>
							<NavDropdown.Item eventKey='lighten'>Lighten</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item eventKey='brighten'>Brighten</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item eventKey='darken'>Darken</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item eventKey='desaturate'>
								Desaturate
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item eventKey='saturate'>Saturate</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item eventKey='greyscale'>
								Greyscale
							</NavDropdown.Item>
							<NavDropdown.Divider />
						</NavDropdown>
						<NavDropdown.Divider />
						<NavDropdown
							onSelect={e => handleSettingValueChange(e)}
							title='Change Value (%)'>
							<NavDropdown.Item eventKey='2'>10</NavDropdown.Item>
							<NavDropdown.Item eventKey='4'>20</NavDropdown.Item>
							<NavDropdown.Item eventKey='6'>30</NavDropdown.Item>
							<NavDropdown.Item eventKey='8'>40</NavDropdown.Item>
							<NavDropdown.Item eventKey='12'>50</NavDropdown.Item>
							<NavDropdown.Item eventKey='16'>60</NavDropdown.Item>
							<NavDropdown.Item eventKey='20'>70</NavDropdown.Item>
							<NavDropdown.Item eventKey='30'>80</NavDropdown.Item>
							<NavDropdown.Item eventKey='40'>90</NavDropdown.Item>
							<NavDropdown.Item eventKey='50'>100</NavDropdown.Item>
						</NavDropdown>
					</Navbar.Collapse>
				</Nav>
				<Nav.Link id='random' onClick={() => setRandom()}>
					Random
				</Nav.Link>
				<Form onChange={e => handleHexChange(e)} inline>
					<FormControl type='text' placeholder='#77d36a' className='mr-sm-2' />
				</Form>
			</Navbar>
		</div>
	);
}
