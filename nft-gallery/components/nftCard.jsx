export const NFTCard = ({ varibles }) => {
	return (
		<div className='w-1/4 flex flex-col '>
			<div className='rounded-md'>
				<img
					className='object-cover h-128 w-full rounded-t-md'
					src={varibles.media[0].gateway}
				/>
			</div>
			<divc className='flex flex-col y-gap-2 px-2 py-3 bg-slate-100  rounded-b-md h-110'>
				<p className='text-xl text-gray-600'>{varibles.title}</p>
				<p className='text-xl text-gray-600'>
					{varibles.id.tokenId.substr(varibles.id.tokenId.length - 4)}
				</p>
				<p className='text-xl text-gray-800'>
					{`${varibles.contract.address.substr(0, 4)}`}...
					{`${varibles.contract.address.substr(0, 4)}`}
				</p>
			</divc>
			<div className='flex-grow mt-2'>
				<p className='text-xl text-gray-600'>
					{varibles.description?.substr(0, 150)}
				</p>
			</div>
			<div className='flex justify-center mb-1'>
				<a
					className='py-2 px-4 bg-blue-500 w-1/2 text-center rounded-m text-white cursor-pointer'
					target={"_blank"}
					href={`https://etherscan.io/token/${varibles.contract.address}`}
				>
					View on Etherscan
				</a>
			</div>
		</div>
	);
};
