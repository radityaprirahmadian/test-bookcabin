import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import { getSeatCharacteristicsLabels } from '@/lib/seat-utils'
import SeatCharacteristicItem from './seat-characteristic-item'

const SeatCharacteristics = () => {
	const { selectedSeat } = useSeatMapStore()

	if (!selectedSeat) {
		return null
	}

	const seatCharacteristics = getSeatCharacteristicsLabels(selectedSeat)

	return (
		<>
			<div>
				<h3 className="text-sm font-medium text-gray-500">Seat Type</h3>
				<div className="mt-1 space-y-1">
					{seatCharacteristics.map((characteristic, index) => (
						<SeatCharacteristicItem key={index} characteristic={characteristic} />
					))}
				</div>
			</div>

			{selectedSeat.limitations && selectedSeat.limitations.length > 0 && (
				<div>
					<h3 className="text-sm font-medium text-gray-500  md:mt-5">Limitations</h3>
					<div className="mt-1 space-y-1">
						{selectedSeat.limitations.map((limitation, index) => (
							<SeatCharacteristicItem key={index} characteristic={limitation} isLimitation />
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default SeatCharacteristics
