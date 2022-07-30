export const NFTCard = ({ varibles }) => {
	return (
		<div>
			<div>
				<img src={varibles.media[0].gateway} />
			</div>
			<div>
				<p>{varibles.title}</p>
				<p>{varibles.id.tokenId.substr(varibles.id.tokenId.length - 4)}</p>
				<p>
					{`${varibles.contract.address.substr(0, 4)}`}...
					{`${varibles.contract.address.substr(0, 4)}`}
				</p>
			</div>
			<div>
				<p>{varibles.description?.substr(0, 150)}</p>
			</div>
			<div>
				<a
					target={"_blank"}
					href={`https://etherscan.io/token/${varibles.contract.address}`}
				>
					View on Etherscan
				</a>
			</div>
		</div>
	);
};
