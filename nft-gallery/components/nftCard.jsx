export const NFTCard = ({ varibles }) => {
	return (
		<div>
			<div>
				<img src={varibles.media[0].gateway} />
			</div>
			<p>{varibles.title}</p>
			<p>{varibles.id.tokenId.substr(varibles.id.tokenId.length - 4)}</p>
			<p>
				{`${varibles.contract.address.substr(0, 4)}`}...
				{`${varibles.contract.address.substr(0, 4)}`}
			</p>
		</div>
	);
};
