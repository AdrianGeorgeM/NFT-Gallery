import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
	const [wallet, setWalletAddress] = useState(""); // specify the initial state of the wallet variable is a string and set it to an empty string
	const [collection, setCollectionAddress] = useState(""); // specify the initial state of the balance variable is a number and set it to 0

	const [NFTS, setNFTs] = useState([]); // specify the initial state of the balance variable is a number and set it to 0
	const fetchNFTs = async () => {
		// fetch the nfts from the blockchain
		// set the state of the nfts to the fetched nfts
		let nfts; // store the nfts in a variable that is gonna fetch the nfts from the blockchain
		console.log("fetching nfts");
		// console.log("nfts", nfts);
		// if the collection address is not empty then fetch the nfts from the collection address else fetch the nfts from the wallet address
		const api_key = "jwB4CGIt608IVkdFaxexVT4lYRoX29Bs";
		const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`; // specify the base url of the api
		if (!collection.length) {
			var requestOptions = {
				method: "GET",
			};

			// const ownerAddr = "0xfae46f94ee7b2acb497cecaff6cff17f621c693d";
			const fetchURL = `${baseURL}?owner=${wallet}`; // specify the url of the api

			nfts = await fetch(fetchURL, requestOptions).then((response) =>
				response.json()
			);
		} else {
			console.log("fetching nfts from collection owned by address");
			const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
			nfts = await fetch(fetchURL, requestOptions).then((response) =>
				response.json()
			);
		}

		if (("nfts", nfts)) {
			// if the nfts are not empty then set the state of the nfts to the fetched nfts
			console.log("nfts:", nfts); // log the nfts
			// setNFTs(nfts); // set the state of the nfts to the fetched nfts
		}
	};
	return (
		<div className='flex min-h-screen flex-col items-center justify-center py-2'>
			<div>
				<input
					onChange={(e) => {
						setWalletAddress(e.target.value); // set the value of the wallet variable to the value of the input
					}}
					value={wallet} // update the value of the wallet variable to the value of the input
					type={"text"}
					placeholder='Add your wallet address'
				/>
				<input
					onChange={(e) => {
						setCollectionAddress(e.target.value);
						// set the value of the wallet variable to the value of the input
					}}
					value={collection}
					type={"text"}
					placeholder='Add the collection '
					address
				/>
				<label htmlFor=''>
					<input type={"checkbox"} placeholder='Search' />
					<button
						onClick={() => {
							fetchNFTs();
						}}
					>
						Let,s go
					</button>
				</label>
			</div>
		</div>
	);
};

export default Home;
