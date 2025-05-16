const NavigationBar = () => {
	return (
		<div className="border-b-2 border-airline-primary-hover bg-white text-black text-2xl fixed top-0 left-0 right-0 z-50">
			<div className="container mx-auto">
				<div className="flex items-center justify-start gap-2 border-r-2 py-6 pl-4 md:pl-0 pr-14 border-r-airline-primary-hover w-fit">
					<span className="text-airline-secondary font-bold ">TOMORROWAIRLINES.</span>
				</div>
			</div>
		</div>
	)
}

export default NavigationBar
