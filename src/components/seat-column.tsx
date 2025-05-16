import { SEAT_TYPES } from '@/constants/seat'

const SeatColumn = ({ column }: { column: string }) => {
	if (column === SEAT_TYPES.LEFT_SIDE || column === SEAT_TYPES.RIGHT_SIDE) {
		return null
	}

	return (
		<div className="w-12 h-12 flex items-center justify-center text-center font-medium text-sm">
			{column === SEAT_TYPES.AISLE ? '' : column}
		</div>
	)
}

export default SeatColumn
