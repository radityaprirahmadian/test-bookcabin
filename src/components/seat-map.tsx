import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import SeatRow from './seat-row'
import FlightInfo from './flight-info'

const SeatMap = () => {
	const { seatMapData } = useSeatMapStore()

	const cabins = seatMapData?.seatsItineraryParts?.[0]?.segmentSeatMaps?.[0]?.passengerSeatMaps?.[0]?.seatMap?.cabins

	if (!cabins || cabins.length === 0) {
		return null
	}

	// Get the main cabin (usually there's only one)
	const mainCabin = cabins[0]
	const { seatRows, seatColumns } = mainCabin

	return (
		<div className="mb-12 relative h-fit">
			<div className="z-10 md:pt-44 pt-32 pb-12">
				<div className="flex z-10 relative flex-col justify-center gap-3 items-center md:mb-18 mb-8">
					<div className="flex justify-center gap-3 items-center">
						from
						<p className="text-3xl font-semibold">
							{seatMapData.seatsItineraryParts[0].segmentSeatMaps[0].segment.origin}
						</p>
						to
						<p className="text-3xl font-semibold">
							{seatMapData.seatsItineraryParts[0].segmentSeatMaps[0].segment.destination}
						</p>
					</div>
					<FlightInfo />
				</div>
				<div className="relative z-10">
					<div className="flex justify-center">
						<div className="grid grid-cols-7 gap-1 flex-1 place-items-center p-4 lg:px-16">
							{seatColumns.map((column, index) => {
								if (column === 'LEFT_SIDE' || column === 'RIGHT_SIDE') {
									return null
								}

								return (
									<div
										key={index}
										className="w-12 h-12 flex items-center justify-center text-center font-medium text-sm"
									>
										{column === 'AISLE' ? '' : column}
									</div>
								)
							})}
						</div>
					</div>

					<div className="space-y-2 p-4 lg:px-16">
						{seatRows.map((row, index) => (
							<SeatRow key={index} row={row} />
						))}
					</div>
				</div>
			</div>
			<div className="absolute top-0 bottom-0 flex flex-col left-0 right-0">
				<div
					style={{ borderRadius: '51% 49% 100% 0% / 100% 100% 0% 0%' }}
					className="bg-white w-full aspect-[1/1] shadow-lg -z-10"
				></div>
				<div className="pb-10 flex-grow bg-white border-b-2 shadow-lg"></div>
			</div>
		</div>
	)
}

export default SeatMap
