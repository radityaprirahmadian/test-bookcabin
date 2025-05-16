import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { formatDate } from '@/lib/date-formatter'
import { ArrowRight, Plane } from 'lucide-react'
import { useState } from 'react'

const FlightInfo = () => {
	const { seatMapData } = useSeatMapStore()
	const [detailOpened, setDetailOpened] = useState<boolean>(false)

	const segment = seatMapData?.segment

	if (!segment) {
		return null
	}

	const { flight, origin, destination, departure, arrival, cabinClass, equipment } = segment

	return (
		<>
			<div
				className="text-xs flex items-center border-b-1 border-b-airline-primary cursor-pointer gap-3"
				onClick={() => setDetailOpened(true)}
			>
				<p>See Details</p>
				<ArrowRight className="h-3 w-3 text-airline-primary" />
			</div>

			<Dialog open={detailOpened} onOpenChange={setDetailOpened}>
				<DialogContent className="lg:max-w-(--breakpoint-md)">
					<DialogHeader className="pb-2">
						<DialogTitle className="flex items-center w-fit pb-2 pe-2 gap-2">
							<Plane className="h-5 w-5" />
							Flight Information
						</DialogTitle>
					</DialogHeader>

					<div className="space-y-4">
						<div className="flex items-start md:items-center flex-col md:flex-row gap-4">
							<div className="flex-1">
								<h3 className="text-sm font-medium text-gray-500">Flight</h3>
								<p className="font-medium">
									{flight.airlineCode} {flight.flightNumber}
								</p>
								<p className="text-sm text-gray-600">Aircraft: {equipment}</p>
							</div>
							<div className="flex-1">
								<h3 className="text-sm font-medium text-gray-500">Route</h3>
								<p className="font-medium flex items-center gap-2">
									{origin} <ArrowRight className="h-4 w-4 text-gray-400" /> {destination}
								</p>
								<p className="text-sm text-gray-600">{cabinClass} Class</p>
							</div>
						</div>

						<div className="flex items-start md:items-center flex-col md:flex-row gap-4">
							<div className="flex-1">
								<h3 className="text-sm font-medium text-gray-500">Departure</h3>
								<p className="font-medium">{formatDate(departure)}</p>
								<p className="text-sm text-gray-600">Terminal: {flight.departureTerminal}</p>
							</div>
							<div className="flex-1">
								<h3 className="text-sm font-medium text-gray-500">Arrival</h3>
								<p className="font-medium">{formatDate(arrival)}</p>
								<p className="text-sm text-gray-600">Terminal: {flight.arrivalTerminal}</p>
							</div>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default FlightInfo
