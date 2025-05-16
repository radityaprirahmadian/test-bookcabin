import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import SeatDetailsMobile from '@/components/seat-details-mobile'
import SeatCharacteristics from './seat-characteristics'

const SeatDetails = () => {
	const { selectedSeat } = useSeatMapStore()

	if (!selectedSeat) {
		return null
	}

	const { amount, currency } = selectedSeat.total?.alternatives?.[0]?.[0] ?? {}

	return (
		<div className="md:mt-8 border-b-2 border-b-airline-primary-hover md:border-b-0">
			<div className="justify-between flex-row md:flex-col gap-4 items-start hidden md:flex">
				<div className="flex justify-center">
					<div className="w-16 h-16 rounded-md border-2 bg-blue-100 border-blue-500 flex items-center justify-center text-lg font-bold">
						{selectedSeat.code}
					</div>
				</div>

				<div>
					<h3 className="text-sm font-medium text-gray-500">Price</h3>
					<p className="text-xl font-bold">
						{amount} {currency}
					</p>
				</div>

				<SeatCharacteristics />
			</div>

			<SeatDetailsMobile />
		</div>
	)
}

export default SeatDetails
