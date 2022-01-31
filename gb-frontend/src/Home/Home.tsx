import React from "react";
import { Container, Image, Card, Row, Col } from 'react-bootstrap';

import './Home.scss';
import MediaSection from './MediaSection/MediaSection';
import FAQ from './FAQ';
import traits from '../assets/media/traits.gif';
import oven from '../assets/media/oven.gif';
import groupshot from '../assets/media/groupshot.svg';
import roadmap from '../assets/media/roadmap.svg';
import lambdalf from '../assets/media/lambdalf.png';

const Home = () => {
	return (
		<div className="Home" data-testid="Home">
			<Container>
				<div id="about">
					<MediaSection className="Home-Section bg-teal" heading="What are Gingerbuddies?" mediaSrc={ traits } mediaType="image">
						<p>Born from a baking mishap in Mrs. Claus' kitchen, Gingerbuddies are a collection of 5000 gingerbread men baked fresh on the ethereum network.</p>
						<p>Each gingerbuddy has a randomized combination of 150+ traits, giving them cool, funny, quirky and provably unique looks.</p>
					</MediaSection>
					<section className="Home-Section bg-purple">
						<h2 className="text-center">Expanding the Gingerverse</h2>
						<p>Following the release of Gingerbuddies (Gen 1), work begins on expanding the gingerverse with two complementary collections:</p>
						<ul>
							<li><strong>Gingerladies</strong> (Gen 2): Hold Gingerbuddies to mint 1 Gingerlady for free+ gas; and</li>
							<li><strong>Gingerbabies</strong> (Gen 3): Hold Gingerbuddies + Gingerladies to mint 1 Gingerbaby free+ gas.</li>
						</ul>
						<p>Wondering what to do with all of them?</p>
					</section>
					<MediaSection className="bg-pink Home-Section" heading="The Magic Oven" mediaSrc={ oven } mediaFirst mediaType="image">
						<p>Represent yourself and your loved ones in a single PFP! With our unique Magic Oven merging, just insert your chosen Gingerverse NFTs into the magic oven to bake them into a single picture. Users will be able to customize their PFPs based on their family/friend group composition. Families come in all shapes and sizes, now your PFP can too!</p>
					</MediaSection>
				</div>
				<div id="roadmap" className="Home-Section bg-orange text-center">
					<h2 className="text-center">Roadmap</h2>
					<div className="centered-parent" aria-hidden="true" >
						<div className="groupshot-wrapper">
							<Image className="groupshot" src={ groupshot } fluid />
						</div>
					</div>
					<Image src={ roadmap } alt="0% Sold Work begins on our Gingerladies/Gingerbabies NFT collections and our Magic Oven merging mechanism 25% Sold 1/1 Giveaway 2 x 0.25 ETH Giveaways 5 ETH to Treasury 1 ETH Charity Donation 50% Sold 1/1 Giveaway 2 x 0.5 ETH Giveaways 5 ETH to Treasury 1 ETH Charity Donation 75% Sold 1/1 Giveaway 2 x 0.75 ETH Giveaways 5 ETH to Treasury 2 ETH Charity Donation 100% Sold 1/1 Giveaway 2 x 1 ETH Giveaways 5 ETH to Treasury 2 ETH Charity Donation" fluid aria-hidden="true" />
					<div className="sr-only">
						<h3>0% Sold</h3>
						<p>Work begins on our Gingerladies/Gingerbabies NFT collections and our Magic Oven merging mechanism</p>
						<h3>25% Sold</h3>
						<p>1/1 Giveaway</p>
						<p>2 x 0.25 ETH Giveaways</p>
						<p>5 ETH to Treasury</p>
						<p>1 ETH Charity Donation</p>
						<h3>50% Sold</h3>
						<p>1/1 Giveaway</p>
						<p>2 x 0.5 ETH Giveaways</p>
						<p>5 ETH to Treasury</p>
						<p>1 ETH Charity Donation</p>
						<h3>75% Sold</h3>
						<p>1/1 Giveaway</p>
						<p>2 x 0.75 ETH Giveaways</p>
						<p>5 ETH to Treasury</p>
						<p>2 ETH Charity Donation</p>
						<h3>100% Sold</h3>
						<p>1/1 Giveaway</p>
						<p>2 x 1 ETH Giveaways</p>
						<p>5 ETH to Treasury</p>
						<p>2 ETH Charity Donation</p>
					</div>
				</div>
				<div id="team" className="Home-Section bg-yellow">
					<h2 className="text-center">Team</h2>
					<Row>
						<Col xs={ 12 } md={ 6 } lg={ 3 }>
							<Card>
							  <Card.Img variant="top" src={ lambdalf } />
							  <Card.Body>
							    <Card.Title>Garvbar</Card.Title>
							    <Card.Text>Co-Founder / Artist</Card.Text>
							  </Card.Body>
							</Card>
						</Col>
						<Col xs={ 12 } md={ 6 } lg={ 3 }>
							<Card>
							  <Card.Img variant="top" src={ lambdalf } />
							  <Card.Body>
							    <Card.Title>Lambdalf the White</Card.Title>
							    <Card.Text>Co-Founder / Developer</Card.Text>
							  </Card.Body>
							</Card>
						</Col>
						<Col xs={ 12 } md={ 6 } lg={ 3 }>
							<Card>
							  <Card.Img variant="top" src={ lambdalf } />
							  <Card.Body>
							    <Card.Title>Token</Card.Title>
							    <Card.Text>Artist / Community Manager</Card.Text>
							  </Card.Body>
							</Card>
						</Col>
						<Col xs={ 12 } md={ 6 } lg={ 3 }>
							<Card>
							  <Card.Img variant="top" src={ lambdalf } />
							  <Card.Body>
							    <Card.Title>Atomic</Card.Title>
							    <Card.Text>Community Manager</Card.Text>
							  </Card.Body>
							</Card>
						</Col>
					</Row>
				</div>
				<div id="faq" className="Home-Section bg-green">
					<h2 className="text-center">FAQ</h2>
					<FAQ.Panel>
						<FAQ.Question>
							What is the supply?
						</FAQ.Question>
						<FAQ.Answer>
							<p>There will be a total supply of 5000 Gingerbuddies.</p>
						</FAQ.Answer>
					</FAQ.Panel>
					<FAQ.Panel>
						<FAQ.Question>
							What's the cost?
						</FAQ.Question>
						<FAQ.Answer>
							<p>0.03ETH each.</p>
						</FAQ.Answer>
					</FAQ.Panel>
					<FAQ.Panel>
						<FAQ.Question>
							When is launch?
						</FAQ.Question>
						<FAQ.Answer>
							<p>TBA. Presale mint will open 72 hours before public mint.</p>
						</FAQ.Answer>
					</FAQ.Panel>
					<FAQ.Panel>
						<FAQ.Question>
							What do I get with my Gingerbuddy?
						</FAQ.Question>
						<FAQ.Answer>
							<p>A cute PFP, full IP rights for personal and commercial use, access to a holders lounge/holder giveaways, and last but not least, the ability to mint a free Gingerlady (Gen 2) and then a free Gingerbaby (Gen 3) when they launch!</p>
						</FAQ.Answer>
					</FAQ.Panel>
					<FAQ.Panel>
						<FAQ.Question>
							When will the Magic Oven, Gingerladies, and Gingerbabies launch?
						</FAQ.Question>
						<FAQ.Answer>
							<p>Immediately after the launch of Gingerbuddies (Gen 1) work will begin on the Magic Oven and Gingerladies (Gen 2) and they will be released simultaneously. We are aiming for a Q2 2022 release. Immediately after the release of Gen 2, work on Gingerbabies (Gen 3) will begin.</p>
						</FAQ.Answer>
					</FAQ.Panel>
					<FAQ.Panel>
						<FAQ.Question>
							How do I purchase a Gingerbuddy?
						</FAQ.Question>
						<FAQ.Answer>
							<ul>
								<li>Download the metamask.io extension on your browser</li>
								<li>Purchase Ethereum from a crypto exchange, such as Binance, Crypto.com, or Coinbase</li>
								<li>Send your purchased Ethereum to your MetaMask wallet</li>
								<li>On launch day, go to the Gingerbuddies website and connect your wallet</li>
								<li>Choose the number of Gingerbuddies you wish to mint, then click MINT, MetaMask will pop-up with the details of your transaction</li>
								<li>Confirm the transaction to pay the mint cost + gas fees</li>
								<li>Once your transaction is confirmed by the network, your NFTs will be viewable in your wallet and on OpenSea</li>
							</ul>
						</FAQ.Answer>
					</FAQ.Panel>
				</div>
			</Container>
		</div>
	);
}
export default Home;
