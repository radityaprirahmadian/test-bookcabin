'use client'

import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import { getSeatTypeClass } from '@/lib/seat-utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import type { Seat } from '@/types/seat-map'

import type { SeatRow as SeatRowType } from '@/types/seat-map'

interface SeatRowProps {
	row: SeatRowType
	columns: string[]
}

export default function SeatRow({ row }: SeatRowProps) {
	const { selectedSeat, setSelectedSeat } = useSeatMapStore()

	const handleSeatClick = (seat: Seat) => {
		if (seat.available) {
			setSelectedSeat(seat)
		}
	}

	return (
		<div className="flex items-center">
			<div className="w-8 text-center font-medium text-sm mr-2">{row.rowNumber > 0 ? row.rowNumber : ''}</div>

			<div className="grid grid-cols-9 gap-1 flex-1">
				{row.seats.map((seat: Seat, seatIndex: number) => {
					const isAisle = seat.storefrontSlotCode === 'AISLE'
					const isBlank = seat.storefrontSlotCode === 'BLANK'
					const isWing = seat.storefrontSlotCode === 'WING'
					const isBulkhead = seat.storefrontSlotCode === 'BULKHEAD'

					if (isAisle) {
						return <div key={seatIndex} className="w-6 h-8"></div>
					}

					if (isBlank || isWing || isBulkhead) {
						return <div key={seatIndex} className="w-8 h-8"></div>
					}

					const isSelected = selectedSeat && selectedSeat.code === seat.code
					const seatTypeClass = getSeatTypeClass(seat)

					return (
						<TooltipProvider key={seatIndex}>
							<Tooltip>
								<TooltipTrigger asChild>
									<button
										className={cn(
											'w-8 h-8 rounded-md border-2 flex items-center justify-center text-xs font-medium transition-colors',
											seatTypeClass,
											isSelected && 'bg-blue-100 border-blue-500',
											!seat.available && 'cursor-not-allowed opacity-50'
										)}
										onClick={() => handleSeatClick(seat)}
										disabled={!seat.available}
									>
										{seat.code}
									</button>
								</TooltipTrigger>
								<TooltipContent>
									<div className="text-xs">
										<p className="font-bold">{seat.code}</p>
										{seat.available ? (
											<>
												<p>
													Price: {seat.total?.alternatives?.[0]?.[0]?.amount}{' '}
													{seat.total?.alternatives?.[0]?.[0]?.currency}
												</p>
												<p>{seat.seatCharacteristics?.join(', ')}</p>
											</>
										) : (
											<p>Not Available</p>
										)}
									</div>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					)
				})}
			</div>
		</div>
	)
}
