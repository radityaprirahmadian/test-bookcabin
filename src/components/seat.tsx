import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import type { Seat as SeatType } from '@/types/seat-map'
import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import { SEAT_COLORS } from '@/constants/seat'
import { getSeatTypeClass } from '@/lib/seat-utils'

export interface SeatProps {
	seat: SeatType
	seatIndex: number
}

const Seat = ({ seat, seatIndex }: SeatProps) => {
	const { selectedSeat, setSelectedSeat } = useSeatMapStore()

	const handleSeatClick = (seat: SeatType) => {
		if (seat.available) {
			setSelectedSeat(seat)
		}
	}

	const isSelected = selectedSeat && selectedSeat.code === seat.code
	const seatTypeClass = getSeatTypeClass(seat)
	const { amount, currency } = seat.total?.alternatives?.[0]?.[0] ?? {}

	return (
		<TooltipProvider key={seatIndex}>
			<Tooltip>
				<TooltipTrigger asChild>
					<button
						className={cn(
							'md:w-12 md:h-12 w-8 h-8 cursor-pointer rounded-md border-2 flex items-center justify-center text-xs font-medium transition-colors',
							seatTypeClass,
							{
								[SEAT_COLORS.SELECTED]: isSelected,
								'cursor-not-allowed opacity-50': !seat.available,
							}
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
							<p>
								Price: {amount} {currency}
							</p>
						) : (
							<p>Not Available</p>
						)}
					</div>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default Seat
