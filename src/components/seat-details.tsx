'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import { getSeatCharacteristicsLabels } from '@/lib/seat-utils'
import { Check, X } from 'lucide-react'

export default function SeatDetails() {
	const { selectedSeat, setSelectedSeat } = useSeatMapStore()

	if (!selectedSeat) {
		return null
	}

	const seatCharacteristics = getSeatCharacteristicsLabels(selectedSeat)
	const price = selectedSeat.total?.alternatives?.[0]?.[0]?.amount
	const currency = selectedSeat.total?.alternatives?.[0]?.[0]?.currency

	const handleConfirm = () => {
		// In a real app, this would submit the selection to the backend
		alert(`Seat ${selectedSeat.code} selected successfully!`)
	}

	const handleCancel = () => {
		setSelectedSeat(null)
	}

	return (
		<Card className="fixed p-4 left-0 right-0 bottom-0">
			<CardContent>
				<div className="flex justify-between items-center">
					<div className="flex justify-center">
						<div className="w-16 h-16 rounded-md border-2 bg-blue-100 border-blue-500 flex items-center justify-center text-lg font-bold">
							{selectedSeat.code}
						</div>
					</div>

					<div>
						<h3 className="text-sm font-medium text-gray-500">Price</h3>
						<p className="text-xl font-bold">
							{price} {currency}
						</p>
					</div>

					<div>
						<h3 className="text-sm font-medium text-gray-500">Seat Type</h3>
						<div className="mt-1 space-y-1">
							{seatCharacteristics.map((characteristic, index) => (
								<div key={index} className="flex items-center gap-2">
									<div className="w-2 h-2 rounded-full bg-blue-500"></div>
									<p className="text-sm">{characteristic}</p>
								</div>
							))}
						</div>
					</div>

					{selectedSeat.limitations && selectedSeat.limitations.length > 0 && (
						<div>
							<h3 className="text-sm font-medium text-gray-500">Limitations</h3>
							<div className="mt-1 space-y-1">
								{selectedSeat.limitations.map((limitation: string, index: number) => (
									<div key={index} className="flex items-center gap-2">
										<div className="w-2 h-2 rounded-full bg-red-500"></div>
										<p className="text-sm">{limitation.replace(/_/g, ' ')}</p>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</CardContent>
			{/* <CardFooter className="flex gap-2">
				<Button onClick={handleConfirm} className="flex-1">
					<Check className="mr-2 h-4 w-4" />
					Confirm
				</Button>
				<Button onClick={handleCancel} variant="outline" className="flex-1">
					<X className="mr-2 h-4 w-4" />
					Cancel
				</Button>
			</CardFooter> */}
		</Card>
	)
}
