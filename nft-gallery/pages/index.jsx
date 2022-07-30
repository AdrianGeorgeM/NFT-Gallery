import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { NFTCard } from "../components/nftCard";

const Home = () => {
	const [wallet, setWalletAddress] = useState(""); // specify the initial state of the wallet variable is a string and set it to an empty string
	const [collection, setCollectionAddress] = useState(""); // specify the initial state of the balance variable is a number and set it to 0

	const [NFTS, setNFTs] = useState([]); // specify the initial state of the balance variable is a number and set it to 0
	const [fetchForCollection, setFetchForCollection] = useState(false); // specify the initial state of the balance variable is a number and set it to 0
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
			console.log(
				"We check how many owned nfts there are from that specific collection"
			);
			const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
			nfts = await fetch(fetchURL, requestOptions).then((response) =>
				response.json()
			);
		}

		if (("nfts", nfts)) {
			// if the nfts are not empty then set the state of the nfts to the fetched nfts
			console.log("nfts:", nfts); // log the nfts
			setNFTs(nfts.ownedNfts); //filter the nfts to only show the ones that are owned by the wallet
		}
	};

	//fetch all of out nfts and retrieve also the metadata
	const fetchNFTsForCollection = async () => {
		if (collection.length) {
			var requestOptions = {
				method: "GET",
			};
			const api_key = "jwB4CGIt608IVkdFaxexVT4lYRoX29Bs";
			const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTsForCollection/`; // specify the base url of the api
			const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`; // specify the url of the api
			const nfts = await fetch(fetchURL, requestOptions).then((response) =>
				response.json()
			);
			if (nfts) {
				// if the nfts are not empty then set the state of the nfts to the fetched nfts
				console.log("NFTS in collection:", nfts); // log the nfts
				setNFTs(nfts.nfts); //filter the nfts to only show the ones that are owned by the wallet
			}
		}
	};
	return (
		<div className='flex flex-col items-center justify-center py-8 gap-y-3'>
			<div className='flex flex-col w-full justify-center items-center gap-y-2'>
				<input
					disabled={fetchForCollection} // disable the input if the fetch for collection is true
					className='w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 focus:shadow-outline'
					onChange={(e) => {
						setWalletAddress(e.target.value); // set the value of the wallet variable to the value of the input
					}}
					value={wallet} // update the value of the wallet variable to the value of the input
					type={"text"}
					placeholder='Add your wallet address'
				/>
				<input
					className='w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 focus:shadow-outline'
					onChange={(e) => {
						setCollectionAddress(e.target.value);
						// set the value of the wallet variable to the value of the input
					}}
					value={collection}
					type={"text"}
					placeholder='collection Address(Bored Ape) '
					address
				/>
				<label className='text-gray-600'>
					<input
						className='mr-2 '
						onChange={(e) => {
							setFetchForCollection(e.target.checked); // set the value of the wallet variable to the value of the input
						}}
						type={"checkbox"}
						placeholder='Search'
					/>
					Fetch for collection
				</label>
				<button
					className={
						"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"
					}
					onClick={() => {
						if (fetchForCollection) {
							// if the fetchForCollection variable is true then fetch the nfts for the collection
							fetchNFTsForCollection(); // fetch the nfts for the collection
						} else {
							// if the fetchForCollection variable is false then fetch the nfts for the wallet
							fetchNFTs(); // fetch the nfts for the wallet
						}
					}}
				>
					Let,s go
				</button>
			</div>
			<div className='   flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2  justify-center'>
				{NFTS.length &&
					NFTS.map((nft) => {
						console.log("nft", nft);
						return <NFTCard varibles={nft} />;
					})}
			</div>
		</div>
	);
};

export default Home;
