import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import SeatRow from './seat-row'
import FlightInfo from './flight-info'
import AirplanesWrapper from './airplanes-wrapper'
import SeatColumn from './seat-column'

const SeatMap = () => {
	const { seatMapData } = useSeatMapStore()

	const cabins = seatMapData?.passengerSeatMaps?.[0]?.seatMap?.cabins
	if (!cabins || cabins.length === 0) {
		return null
	}

	const { seatRows, seatColumns } = cabins[0]
	const { origin, destination } = seatMapData.segment

	return (
		<AirplanesWrapper>
			<div className="z-10 md:pt-44 pt-32 pb-12">
				<div className="flex z-10 relative flex-col justify-center gap-3 items-center md:mb-18 mb-8">
					<div className="flex justify-center gap-3 items-center">
						from
						<p className="text-3xl font-semibold">{origin}</p>
						to
						<p className="text-3xl font-semibold">{destination}</p>
					</div>
					<FlightInfo />
				</div>

				<div className="relative z-10">
					<div className="flex justify-center">
						<div className="grid grid-cols-7 gap-1 flex-1 place-items-center p-4 lg:px-16">
							{seatColumns.map((column, index) => {
								return <SeatColumn key={index} column={column} />
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
		</AirplanesWrapper>
	)
}

export default SeatMap
