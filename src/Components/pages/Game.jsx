import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { WrapperStyle, Button, Image } from "./atoms/atom.style";
import Wallet from "../../assets/wallet.svg";
import QuestionMark from "../../assets/question-mark.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackBtn from "../../assets/backbtn.svg";
import { useNavigate } from "react-router-dom";

const number = 60;

const Game = () => {
	 const navigate = useNavigate();

	const [choices, setChoices] = useState([]);
	const [stake, setStake] = useState("");
	const [disable,setDisable]= useState(false);

	useEffect(() => {
		console.log(choices);
	}, [choices]);

	const handleChange = (e) => {
		setStake(e.target.value);
	};
	console.log(choices,disable);

	const handleSubmit = () => {
	if (choices.length > 2) {
		setDisable(true);
	} else if (!stake) {
		toast(`Please enter a number in the input field.`,{type:"warning"});
	} else if (choices.length < 3 && stake == number) {
		setChoices([...choices, +stake]);
		toast(`Your guess of ${stake} is correct!`, { type: "success" });
		setDisable(true);
		setTimeout(() => {
		navigate("/winner");
		}, 5000);
	} else if (choices.length < 3 && number - stake <= 10 && number - stake > 0) {
		setChoices([...choices, +stake]);
		toast(`Your guess of ${stake} is slightly low!`, { type: "error" });
		setStake("");
	} else if (choices.length < 3 && stake - number <= 10 && stake - number > 0) {
		setChoices([...choices, +stake]);
		toast(`Your guess of ${stake} is slightly high!`, { type: "error" });
		setStake("");
	} else {
		setChoices([...choices, +stake]);
		toast(`Your guess of ${stake} is incorrect!`, { type: "error" });
		setStake("");
	}
	};
	return (
		<WrapperStyle>
			<Style>
				<div className="top">
					<div className="left" onClick={() => navigate(-1)}>
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
					<div className="stake-input">
						<input
							type="text"
							name=""
							className="stake-amount"
							placeholder={disable ? stake : "Enter an amount"}
							onChange={handleChange}
							value={stake}
							style={{
								display: choices[2] && choices[2] != number ? "none" : "block",
								background: disable && "#3AB54A",
								color: disable && "#fff",
							}}
							disabled={disable}
						/>
						<input
							type="text"
							name=""
							className="stake-amount"
							placeholder={disable ? stake : "Enter an amount"}
							value={number}
							style={{
								display: choices[2] && choices[2] != number ? "block" : "none",
								background: "#3AB54A",
								color: "#fff",
							}}
							disabled={disable}
							readOnly={true}
						/>
					</div>
					<div>
						<Button type="button" onClick={handleSubmit} disabled={disable || !stake}>
							Guess
						</Button>
					</div>
				</div>
				<div className="bottom">
					<div className="stake-choices">
						<p>Pick a number from 1 - 100</p>
						<div className="choices">
							<p
								className="choice"
								style={{
									backgroundColor:
										choices[0] && choices[0] != number
											? "#FF2D58"
											: choices[0] == number
											? "#3AB54A"
											: "#2f2e41",
								}}>
								{choices[0] || "-"}
							</p>
							<p
								className="choice"
								style={{
									backgroundColor:
										choices[1] && choices[1] != number
											? "#FF2D58"
											: choices[1] == number
											? "#3AB54A"
											: "#2f2e41",
								}}>
								{choices[1] || "-"}
							</p>
							<p
								className="choice"
								style={{
									backgroundColor:
										choices[2] && choices[2] != number
											? "#FF2D58"
											: choices[2] == number
											? "#3AB54A"
											: "#2f2e41",
								}}>
								{choices[2] || "-"}
							</p>
						</div>
					</div>
					<ToastContainer theme="colored" />

					<p className="tries">{`You’ve got ${3 - choices.length} ${
						3 - choices.length > 1 ? "tries" : "try"
					}`}</p>
					<small>Your potential win</small>
					<p>BTC 1.2</p>
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

		.stake-input {
			margin: 2.6rem auto;
			width: 9rem;
			height: 9rem;
			border-radius: 50%;
			.stake-amount {
				font-size: 1.4rem;
				border-radius: 50%;
				width: 100%;
				height: 100%;
				outline: #ececec;
				border-style: none;
				color: #000;
				text-align: center;
				padding: 0.5rem;
				background: #ececec url(${QuestionMark}) no-repeat center;
				transition: background 0.5s ease-in-out;
				&:focus {
					background: #ececec;
				}
				::placeholder {
					font-size: 0.6em;
				}
			}
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
			.choices {
				display: grid;
				grid-template-columns: auto auto auto;
				text-align: center;
				.choice {
					line-height: 5rem;
					margin: 1rem auto;
					width: 5rem;
					font-size: 2em;
					border-radius: 50%;
					color: #fff;
					background-color: #2f2e41;
					transition: all 0.5s ease-in-out;
				}
			}
		}
		.tries {
			color: #0a76f5;
		}
	}
`;

export default Game;
