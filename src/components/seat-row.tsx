import type { Seat, SeatRow as SeatRowType } from '@/types/seat-map'
import RowItem from './row-item'

interface SeatRowProps {
	row: SeatRowType
}

const SeatRow = ({ row }: SeatRowProps) => {
	return (
		<div className="flex items-center">
			<div className="grid grid-cols-7 gap-1 flex-1 place-items-center">
				{row.seats.map((seat: Seat, seatIndex: number) => {
					return <RowItem key={seatIndex} seat={seat} rowNumber={row.rowNumber} seatIndex={seatIndex} />
				})}
			</div>
		</div>
	)
}

export default SeatRow
