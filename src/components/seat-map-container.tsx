'use client'

import { useEffect } from 'react'
import FlightInfo from './flight-info'
import SeatMap from './seat-map'
import { Card, CardContent } from '@/components/ui/card'
import PassengerInfo from './passenger-info'
import SeatDetails from './seat-details'
import SeatLegend from './seat-legend'
import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import seatMapResponse from '@/constants/seat-map-response.json'

export default function SeatMapContainer() {
	const { selectedSeat, setSeatMapData } = useSeatMapStore()

	// Initialize the store with the seat map data
	useEffect(() => {
		setSeatMapData(seatMapResponse)
	}, [])

	return (
		<div className="relative mx-auto p-4 pb-0 pt-28">
			<div className="grid grid-cols-1 justify-center lg:grid-cols-12 gap-6 mx-auto">
				<div className="lg:col-span-3">
					<div className="mb-6">
						<FlightInfo />
					</div>

					<PassengerInfo />
				</div>

				<div className="lg:col-start-6 lg:col-end-12">
					<SeatMap />
				</div>

				{/* <div className="lg:col-span-3">{selectedSeat && <SeatDetails />}</div> */}
			</div>

			{/* <Card className="fixed p-4 left-0 right-0 bottom-0">
				<CardContent>
					<SeatLegend />
				</CardContent>
			</Card> */}
			{/* {selectedSeat && <SeatDetails />} */}
		</div>
	)
}
