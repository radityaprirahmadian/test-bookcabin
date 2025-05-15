'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import { User } from 'lucide-react'

export default function PassengerInfo() {
	const { seatMapData } = useSeatMapStore()

	const passengerData = seatMapData?.seatsItineraryParts?.[0]?.segmentSeatMaps?.[0]?.passengerSeatMaps?.[0]?.passenger

	if (!passengerData) {
		return <div>Loading passenger information...</div>
	}

	const { passengerDetails, passengerInfo } = passengerData

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader className="pb-2">
					<CardTitle className="flex items-center gap-2 text-lg">
						<User className="h-5 w-5" />
						Passenger Information
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div>
							<h3 className="text-sm font-medium text-gray-500">Name</h3>
							<p className="font-medium">
								{passengerDetails.firstName} {passengerDetails.lastName}
							</p>
						</div>

						<div>
							<h3 className="text-sm font-medium text-gray-500">Passenger Type</h3>
							<p className="font-medium">{passengerInfo.type}</p>
						</div>

						{passengerInfo.emails && passengerInfo.emails.length > 0 && (
							<div>
								<h3 className="text-sm font-medium text-gray-500">Email</h3>
								<p className="font-medium">{passengerInfo.emails[0]}</p>
							</div>
						)}

						{passengerData.preferences?.frequentFlyer && passengerData.preferences.frequentFlyer.length > 0 && (
							<div>
								<h3 className="text-sm font-medium text-gray-500">Frequent Flyer</h3>
								<p className="font-medium">
									{passengerData.preferences.frequentFlyer[0].airline}:{' '}
									{passengerData.preferences.frequentFlyer[0].number}
								</p>
							</div>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
