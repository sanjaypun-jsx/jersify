import { Button, Grid } from '@material-ui/core';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from '../Assets/home.png';
import StyledButtons from '../Components/StyledButton';
import ChelseaKits from '../FileCollection/ChelseaKits';
import Mugs from './Mugs';
import Boots from './Boots';
import Scarfs from './Scarfs';
import { Link } from 'react-scroll';

const DivWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 15vh;
	height: 100vh;
	width: 90%;
	margin: auto;
`;
const GridContainer = styled(Grid)`
display:flex;
justify-content:center;
align-items:center;
`;

const GridItem = styled(Grid)`
display:flex;
justify-content:center;	
align-items:center;

`;
const H2 = styled.h2`
	font-size: 3vw;
	color: orange;
	> h3 {
		color: orange;
	}
	@media (max-width: 1280px) {
		margin-top: 200px;
		font-size: 4vw;
		z-index: 999;
	}
	@media (max-width: 960px) {
		margin-top: 600px;
		font-size: 4vw;
		z-index: 999;
	}
	@media (max-width: 720px) {
		font-size: 4vw;
		text-align: center;
	}
	@media (max-width: 540px) {
		font-size: 6vw;
		text-align: center;
	}
	@media (max-width: 368px) {
		font-size: 6vw;
		margin-top: 650px;
		text-align: center;
	}
`;
const ParentButton = styled(Button)`
border-radius:0px;
color:white;
background-color:#1a237e;
padding:15px;
margin-top:0px 	10px;
transition:all 0.5s ease-in-out;
	&:hover{
		background-color:#ffeb3b;
		color:black;
	}	
	@media (max-width:540px) {
		text-align: center;
		margin-top:10px
	}
	@media (max-width: 368px) {
		text-align: center;
		margin-top:10px
	}
`;
const IMG = styled(motion.img)`
	max-height: 612px;
	margin-top: 80px;
	@media (max-width: 1280px) {
		max-height: 612px;
		margin-top: 350px;
	}
	@media (max-width: 960px) {
		max-height: 580px;
		margin-top: 0px;
	}
	@media (max-width: 960px) {
		max-height: 550px;
	}
	@media (max-width: 720px) {
		font-size: 22px;
	}
	@media (max-width: 540px) {
		font-size: 16px;
	}
`;

const H3 = styled.h3`
	@media (max-width: 1280px) {
		font-size: 4vw;
	}
	@media (max-width: 960px) {
		font-size: 4vw;
	}
	@media (max-width: 720px) {
		font-size: 4vw;
		text-align: center;
	}
	@media (max-width: 540px) {
		font-size: 5vw;
		text-align: center;
	}
	@media (max-width: 368px) {
		font-size: 5vw;
		text-align: center;
	}
`;
const PBdiv = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	@media (max-width: 540px) {
		display: block;
		text-align: center;
	}
	@media (max-width: 368px) {
		display: block;
		text-align: center;
	}
`;

const LandingPage = ({ history }) => {
	const [ selectedImg, setSelectedImg ] = useState(img1);
	const [ selectedText, setSelectedText ] = useState('Home');
	const [ active, setActive ] = useState('');
	const text = (txt) => {
		setSelectedText(txt);
	};
	const image = (img) => {
		setSelectedImg(img);
	};
	return (
		<div>
			<DivWrapper id='kits'>
				<GridContainer container>
					<GridItem item xs={8} sm={6} md={4} lg={3} style={{ display: 'block' }}>
						<H2>Chelsea {selectedText} Kit 20/21</H2>
						<H3>Price: Rs. 1500</H3>
						<PBdiv>
							<ParentButton onClick={(e) => history.push('/')}>BUY NOW</ParentButton>
							<ParentButton>ADD TO CART</ParentButton>
						</PBdiv>
					</GridItem>
					<GridItem item xs={12} sm={10} md={8} lg={5}>
						<IMG src={selectedImg} alt={selectedText} />
					</GridItem>
					<GridItem item xs={8} sm={6} md={4} lg={4} style={{ display: 'block' }}>
						<div
							className='kits'
							style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
						>
							{ChelseaKits.map((kit, index) => {
								return (
									<StyledButtons
										active={active === kit.tag ? true : false}
										onClick={(tag) => setActive(tag)}
										image={image}
										text={text}
										img={kit.img}
										tag={kit.tag}
										key={index}
									>
										{kit.tag}
									</StyledButtons>
								);
							})}
						</div>
						<div
							className='other-Items'
							style={{ display: 'flex', marginTop: '10vh', justifyContent: 'center' }}
						>
							<ParentButton disabled style={{ color: 'white' }}>
								<i className='fas fa-angle-up' />
							</ParentButton>
							<ParentButton>
								<Link
									activeClass='active'
									to='mugs'
									spy={true}
									smooth={true}
									hashSpy={true}
									offset={50}
									duration={500}
									delay={500}
									isDynamic={true}
									ignoreCancelEvents={false}
								>
									<i className='fas fa-angle-down' />
								</Link>
							</ParentButton>
						</div>
					</GridItem>
				</GridContainer>
			</DivWrapper>
		</div>
	);
};

export default LandingPage;
