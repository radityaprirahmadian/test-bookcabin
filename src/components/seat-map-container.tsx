import SeatMap from './seat-map'
import PassengerInfo from './passenger-info'
import SeatDetails from './seat-details'
import SeatLegend from './seat-legend'
import { useSeatMapStore } from '@/hooks/use-seat-map-store'

const SeatMapContainer = () => {
	const { selectedSeat } = useSeatMapStore()

	return (
		<div className="relative container mx-auto bg-gray-100 md:ps-0 md:pe-20 pb-0 border-r-2 border-r-airline-primary-hover border-l-2 border-l-airline-primary-hover md:border-l-0">
			<div className="grid grid-cols-1 justify-center lg:grid-cols-12 gap-20 mx-auto">
				<div className="lg:col-span-5 p-6 md:ps-0 md:pe-6 relative bg-white pt-28 border-b-2 md:border-b-0 border-b-airline-primary-hover md:border-r-2 border-r-airline-primary-hover">
					<div className="sticky top-28">
						<PassengerInfo />
						<div className="hidden md:block">{selectedSeat && <SeatDetails />}</div>
					</div>
				</div>

				<div className="lg:col-start-6 lg:col-end-13 pt-0 pb-28 md:py-28 animate-slide-up px-6 md:px-0">
					<SeatMap />
				</div>
			</div>

			<div className="border-t-2 border-airline-primary-hover bg-white fixed left-0 right-0 bottom-0">
				<div className="md:hidden">{selectedSeat && <SeatDetails />}</div>
				<SeatLegend />
			</div>
		</div>
	)
}

export default SeatMapContainer
