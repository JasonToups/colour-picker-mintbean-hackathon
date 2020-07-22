import React from 'react';
import {
	Navbar,
	Form,
	Nav,
	FormControl,
	NavDropdown,
	Tooltip,
	OverlayTrigger,
} from 'react-bootstrap';

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

	function renderTooltipBrand(props) {
		return (
			<Tooltip id='button-tooltip' {...props}>
				Click to Generate Colors
			</Tooltip>
		);
	}
	function renderTooltipSchemes(props) {
		return (
			<Tooltip id='button-tooltip' {...props}>
				Try different Color Schemes
			</Tooltip>
		);
	}
	function renderTooltipAdjustments(props) {
		return (
			<Tooltip id='button-tooltip' {...props}>
				Make Adjustments to the Current Palette
			</Tooltip>
		);
	}
	function renderTooltipIntensity(props) {
		return (
			<Tooltip id='button-tooltip' {...props}>
				Change the Intensity of the Adjustments
			</Tooltip>
		);
	}
	function renderTooltipInput(props) {
		return (
			<Tooltip id='button-tooltip' {...props}>
				Generate a Palette from a Hex Value
			</Tooltip>
		);
	}

	return (
		<div>
			<Navbar expand='lg' bg='dark' variant='dark'>
				<Nav className='mr-auto'>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />

					<Navbar.Collapse id='responsive-navbar-nav'>
						<OverlayTrigger
							placement='bottom'
							delay={{ show: 250, hide: 200 }}
							overlay={renderTooltipBrand}>
							<Nav.Link id='brand' onClick={() => setRandom()}>
								Color Palette Generator
							</Nav.Link>
						</OverlayTrigger>
						<OverlayTrigger
							placement='right'
							delay={{ show: 250, hide: 200 }}
							overlay={renderTooltipSchemes}>
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
						</OverlayTrigger>
						<NavDropdown.Divider />
						<OverlayTrigger
							placement='right'
							delay={{ show: 250, hide: 200 }}
							overlay={renderTooltipAdjustments}>
							<NavDropdown
								onSelect={e => changeSettings(e)}
								title='Adjustments'
								id='adjustments'>
								<NavDropdown.Item eventKey='lighten'>Lighten</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item eventKey='brighten'>
									Brighten
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item eventKey='darken'>Darken</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item eventKey='desaturate'>
									Desaturate
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item eventKey='saturate'>
									Saturate
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item eventKey='greyscale'>
									Greyscale
								</NavDropdown.Item>
								<NavDropdown.Divider />
							</NavDropdown>
						</OverlayTrigger>
						<NavDropdown.Divider />
						<OverlayTrigger
							placement='right'
							delay={{ show: 250, hide: 200 }}
							overlay={renderTooltipIntensity}>
							<NavDropdown
								onSelect={e => handleSettingValueChange(e)}
								title='Intensity'>
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
						</OverlayTrigger>
					</Navbar.Collapse>
				</Nav>
				<Form onChange={e => handleHexChange(e)} inline>
					<OverlayTrigger
						placement='bottom'
						delay={{ show: 250, hide: 200 }}
						overlay={renderTooltipInput}>
						<FormControl
							type='text'
							placeholder='#77d36a'
							className='mr-sm-2'
						/>
					</OverlayTrigger>
				</Form>
			</Navbar>
		</div>
	);
}
