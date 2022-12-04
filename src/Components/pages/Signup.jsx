import React from "react";
import styled from "styled-components";
import { Button, Image, WrapperStyle } from "./atoms/atom.style";
import RegisterBg from "../../assets/register.svg";

const Signup = () => {
	return (
		<WrapperStyle registration>
			<Style>
				<div className="top">
					<h1 className="small">Hello,</h1>
					<h1>Sign Up!</h1>
					{/* <Image src={Top} alt="" /> */}
				</div>
				<div className="mid">
					{/* RegisterBg */}
					<div className="container">
						<Image src={RegisterBg} alt="" />
					</div>
				</div>
				<div className="bottom">
					<form>
						<div className="field">
							<label htmlFor="username">Username</label>
							<input type="text" placeholder="hunsa" />
						</div>
						<div className="field">
							<label htmlFor="username">Email Address</label>
							<input type="email" placeholder="Hunsa@gmail.com" />
						</div>
						<div className="field">
							<label htmlFor="username">Password</label>
							<input type="password" placeholder="........" />
						</div>
						<Button>Sign up</Button>
					</form>
				</div>
			</Style>
		</WrapperStyle>
	);
};

const Style = styled.div`
	height: 100%;
	width: 100%;

	.top {
		h1 {
			font-size: 3.8rem;
			/* line-height: 4rem; */
			margin: 0;
			color: #fff;
		}
		.small {
			font-size: 2rem;
		}
	}
	.mid {
		width: 100%;
		/* height: 8.5em; */
		margin-top: 2.0em;
		margin-bottom: -1.5em;
		text-align: right;
		.container {
			width: 60%;
			min-height: 30px;
			display: inline-block;
			position: relative;
		}
	}
	.bottom {
		width: 100%;
		form {
			display: flex;
			flex-direction: column;
			width: 100%;

			.field {
				width: 100%;

				label {
					font-size: 1.2rem;
					display: block;
				}
				input {
					background-color: #f8f8f8;
					padding: .8em 0.75em;
					border-style: none;
					margin: 0.45em 0 1em;
					width: 100%;
				}
				input::placeholder,
				input[email]::placeholder {
					font-size: 1.125rem;
				}
			}
		}
	}
`;
export default Signup;
