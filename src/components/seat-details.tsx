import { Button } from '@/components/ui/button'
import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import { getSeatCharacteristicsLabels } from '@/lib/seat-utils'
import { ChevronUp } from 'lucide-react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { useState } from 'react'

const SeatDetails = () => {
	const { selectedSeat } = useSeatMapStore()
	const [isOpen, setIsOpen] = useState(false)

	if (!selectedSeat) {
		return null
	}

	const seatCharacteristics = getSeatCharacteristicsLabels(selectedSeat)
	const price = selectedSeat.total?.alternatives?.[0]?.[0]?.amount
	const currency = selectedSeat.total?.alternatives?.[0]?.[0]?.currency

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

			<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full p-4 flex justify-between md:hidden">
				<div className="flex gap-6">
					<div className="flex justify-center">
						<div className="w-12 h-12 rounded-md border-2 bg-blue-100 border-blue-500 flex items-center justify-center font-bold">
							{selectedSeat.code}
						</div>
					</div>
					<div>
						<h3 className="text-sm font-medium text-gray-500">Price</h3>
						<p className="text-xl font-bold">
							{price} {currency}
						</p>
					</div>
					<CollapsibleContent className="space-y-2">
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
								<h3 className="text-sm font-medium text-gray-500 mt-5">Limitations</h3>
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
					</CollapsibleContent>
				</div>
				<div className="flex items-center justify-between space-x-4 px-4">
					<CollapsibleTrigger asChild>
						<Button variant="ghost" size="sm">
							<ChevronUp className={isOpen ? 'h-4 w-4 rotate-180' : 'h-4 w-4'} />
						</Button>
					</CollapsibleTrigger>
				</div>
			</Collapsible>
		</div>
	)
}

export default SeatDetails
