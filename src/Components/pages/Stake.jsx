import React from "react";
import styled from "styled-components";
import { WrapperStyle, Button, Image } from "./atoms/atom.style";
import Wallet from "../../assets/wallet.svg";
import { Link } from "react-router-dom";

const Stake = () => {
	return (
		<WrapperStyle>
			<Style>
				<div className="top">
					<p>BTC 0.7839134</p>
					<div className="right">
						<Image src={Wallet} alt="" />
					</div>
				</div>
				<div className="mid">
					<p>How much are you staking?</p>
					<div className="input">
						<input type="text" />
					</div>
					<Link to="/game">
						<Button>Stake</Button>
					</Link>
				</div>
				<div className="bottom">
					<p>The Higher Your Stake, The Higher Your BTC Wins</p>
				</div>
			</Style>
		</WrapperStyle>
	);
};

const Style = styled.div`
	height: 100%;
	width: 100%;
	font-size: 1.4rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.top {
		display: flex;
		align-items: center;
		/* width: 40%; */
		justify-content: flex-end;
		font-size: 1rem;
		align-items: center;
		.right {
			width: 1.313rem;
			margin-left: 1rem;
		}
		.small {
			font-size: 2rem;
			line-height: 2rem;
		}
	}
	.mid {
		width: 80%;
		margin: 3.19em auto;
		text-align: center;
		.input {
			margin: 2.6rem auto 7rem;
			width: 7rem;
			height: 4.375rem;
			input {
				width: 100%;
				height: 100%;
				background-color: #ececec;
				outline: #ececec;
				border-style: none;
				color: #000;
				text-align: center;
				padding: 0.5rem;
			}
		}
	}
	.bottom {
		width: 70%;
		margin: auto;
		p {
			font-size: 1rem;
			color: #8f8f8f;
			text-align: center;
		}
	}
`;
export default Stake;
