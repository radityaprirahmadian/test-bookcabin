'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MapPin } from 'lucide-react'
import SeatRow from './seat-row'

export default function SeatMap() {
	const { seatMapData } = useSeatMapStore()

	const cabins = seatMapData?.seatsItineraryParts?.[0]?.segmentSeatMaps?.[0]?.passengerSeatMaps?.[0]?.seatMap?.cabins

	if (!cabins || cabins.length === 0) {
		return <div>Loading seat map...</div>
	}

	// Get the main cabin (usually there's only one)
	const mainCabin = cabins[0]
	const { seatRows, seatColumns } = mainCabin

	return (
		<div>
			<div className="flex justify-center mb-4">
				<div className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium">
					Aircraft: {seatMapData.seatsItineraryParts[0].segmentSeatMaps[0].passengerSeatMaps[0].seatMap.aircraft}
				</div>
			</div>

			<div className="flex justify-center mb-6">
				<div className="grid grid-cols-9 gap-1">
					{seatColumns.map((column, index) => (
						<div key={index} className="text-center font-medium text-sm">
							{column !== 'LEFT_SIDE' && column !== 'RIGHT_SIDE' && column !== 'AISLE' ? column : ''}
						</div>
					))}
				</div>
			</div>

			<div className="space-y-2">
				{seatRows.map((row, index) => (
					<SeatRow key={index} row={row} columns={seatColumns} />
				))}
			</div>
		</div>
	)
}
