import React from "react";
import styled, { keyframes } from "styled-components";
import { WrapperStyle, Button, Image } from "./atoms/atom.style";
import Wallet from "../../assets/wallet.svg";
import BackBtn from "../../assets/backbtn.svg";
import { Link, useNavigate } from "react-router-dom";
import Trophy from "../../assets/trophy.svg";

const animate = keyframes`
    0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const Congratulations = () => {
	const navigate = useNavigate();

	return (
		<WrapperStyle>
			<Style>
				<div className="top">
					<div className="left">
						<div className="back-btn">
							<Image src={BackBtn} alt="Click here to go back" />
						</div>
						<p>Quit</p>
					</div>
					<div id="right">
						<p>BTC 0.7839134</p>
						<div className="right">
							<Image src={Wallet} alt=" Wallet icon" />
						</div>
					</div>
				</div>
				<div className="mid">
					<div className="stake"></div>
					<h4 className="prize">
						You’ve won <span>BTC 1.2</span>
					</h4>
					<div className="img-wrapper">
						<Image src={Trophy} />
					</div>
					<Link to="/stake">
						<Button type="button">Guess</Button>
					</Link>
				</div>
				<div className="bottom">
					<div className="stake-choices">
						<p onClick={() => navigate("/login")}>Log Out</p>
					</div>
				</div>
			</Style>
		</WrapperStyle>
	);
};

const Style = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 1rem;
		align-items: center;

		.left,
		#right {
			display: flex;
			align-items: center;
			.right {
				width: 1.313rem;
				margin-left: 1rem;
			}
		}
		.left {
			cursor: pointer;
			.back-btn {
				margin-right: 1rem;
			}
		}
		.small {
			font-size: 2rem;
			line-height: 2rem;
		}
	}
	.mid {
		width: 80%;
		margin: 1.19em auto;
		text-align: center;

		.prize {
			font-size: 1.6rem;
			border-style: none;
			color: #000;
			text-align: center;
			font-weight: 400;
			span {
				font-weight: 700;
				color: #3ab54a;
			}
		}
		.img-wrapper {
			width: 16rem;
			margin: auto;
			display: flex;
			justify-content: center;
			padding-left: 3rem;
			transition: ${animate} 2s;
		}
	}

	.bottom {
		width: 100%;
		margin: auto;
		text-align: center;
		p {
			font-size: 1rem;
			color: #8f8f8f;
			text-align: center;
		}
		.stake-choices {
			p {
				font-size: 1.5em;
				color: #0a76f5;
				cursor: pointer;
			}
		}
	}
`;

export default Congratulations;
