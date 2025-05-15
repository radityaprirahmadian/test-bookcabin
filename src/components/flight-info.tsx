'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { formatDate } from '@/lib/date-formatter'
import { Plane } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function FlightInfo() {
	const { seatMapData } = useSeatMapStore()
	const [detailOpened, setDetailOpened] = useState<boolean>(false)
	// Extract flight information from the seat map data
	const segment = seatMapData?.seatsItineraryParts?.[0]?.segmentSeatMaps?.[0]?.segment

	if (!segment) {
		return <div>Loading flight information...</div>
	}

	const { flight, origin, destination, departure, arrival, cabinClass, equipment } = segment

	return (
		<>
			<Card>
				<CardHeader className="pb-2">
					<CardTitle className="flex items-center gap-2 text-lg">
						<Plane className="h-5 w-5" />
						Flight Information
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex items-center justify-end">
						<Button variant="default" onClick={() => setDetailOpened(true)}>
							See Detail
						</Button>
					</div>
				</CardContent>
			</Card>
			<Dialog open={detailOpened} onOpenChange={setDetailOpened}>
				<DialogContent className="sm:max-w-(--breakpoint-lg)">
					<DialogHeader className="pb-2">
						<DialogTitle className="flex items-center gap-2">
							<Plane className="h-5 w-5" />
							Flight Information
						</DialogTitle>
					</DialogHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
							<div>
								<h3 className="text-sm font-medium text-gray-500">Flight</h3>
								<p className="font-medium">
									{flight.airlineCode} {flight.flightNumber}
								</p>
								<p className="text-sm text-gray-600">Aircraft: {equipment}</p>
							</div>

							<div>
								<h3 className="text-sm font-medium text-gray-500">Route</h3>
								<p className="font-medium">
									{origin} → {destination}
								</p>
								<p className="text-sm text-gray-600">{cabinClass} Class</p>
							</div>

							<div>
								<h3 className="text-sm font-medium text-gray-500">Departure</h3>
								<p className="font-medium">{formatDate(departure)}</p>
								<p className="text-sm text-gray-600">Terminal: {flight.departureTerminal}</p>
							</div>

							<div>
								<h3 className="text-sm font-medium text-gray-500">Arrival</h3>
								<p className="font-medium">{formatDate(arrival)}</p>
								<p className="text-sm text-gray-600">Terminal: {flight.arrivalTerminal}</p>
							</div>
						</div>
					</CardContent>
				</DialogContent>
			</Dialog>
		</>
	)
}
