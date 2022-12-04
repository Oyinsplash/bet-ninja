import React from "react";
import styled from "styled-components";
import { Button, Image, WrapperStyle } from "./atoms/atom.style";
import LoginBg from "../../assets/login.svg";
import { Link } from "react-router-dom";

const Login = () => {
	const [walletAddress, setWalletAddress] = useState("");

    useEffect(() => {
        getCurrentWalletConnected();
        addWalletListener();
    }, [walletAddress]);

    const connectWallet = async() => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                /* MetaMask is installed */
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
                console.log(accounts[0]);
            } catch (err) {
                console.error(err.message);
            }
        } else {
            /* MetaMask is not installed */
            console.log("Please install MetaMask");
        }
    };

    const getCurrentWalletConnected = async() => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    console.log(accounts[0]);
                } else {
                    console.log("Connect to MetaMask using the Connect button");
                }
            } catch (err) {
                console.error(err.message);
            }
        } else {
            /* MetaMask is not installed */
            console.log("Please install MetaMask");
        }
    };

    const addWalletListener = async() => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            window.ethereum.on("accountsChanged", (accounts) => {
                setWalletAddress(accounts[0]);
                console.log(accounts[0]);
            });
        } else {
            /* MetaMask is not installed */
            setWalletAddress("");
            console.log("Please install MetaMask");
        }
    };
	return (
		<WrapperStyle registration>
			<Style>
				<div className="top">
					<h1 className="small">Welcome,</h1>
					<h1> Connect!</h1>
				</div>
				<div className="mid">
					<div className="info">
						<h4>GETTING STARTED TIPS: </h4>
						<ul>
							<li>
								The user is given 3 chances to guess within a certain range what
								random number the system generated.
							</li>
							<li>
								With every guess a hint is given to the player as to whether
								they're close or far off.
							</li>
							<li>
								Before playing you are to stake a certain amount, which upon
								winning would be 10x, 20x, 30x if you win.
							</li>
						</ul>
					</div>
					<div className="container">
						<Image src={LoginBg} alt="" />
					</div>
				</div>
				<Link to="/stake" className="bottom">
					<Button>Connect to wallet</Button>
				</Link>
			</Style>
		</WrapperStyle>
	);
};

const Style = styled.div`
	height: 100%;
	width: 100%;
	.top {
		h1 {
			font-size: 3.5rem;
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
		/* height: 11.5em; */
		/* margin-top: 12em; */
		margin-bottom: 1rem;
		text-align: center;
		.info {
			margin-top: 6.5em;
			text-align: left;
			color: #8f8f8f;
			font-size: 0.95em;
			li {
				margin-bottom: 0.5rem;
			}
		}
		.container {
			width: 60%;
			min-height: 1.5em;
			display: inline-block;
			position: relative;
		}
	}
	.bottom {
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: center;
	}
`;
export default Login;
