import { SEAT_TYPES } from '@/constants/seat'
import type { Seat as SeatType } from '@/types/seat-map'
import Seat from './seat'

const RowItem = ({ seat, seatIndex, rowNumber }: { seat: SeatType; seatIndex: number; rowNumber: number }) => {
	const generateRowItem = (code: string) => {
		switch (code) {
			case SEAT_TYPES.AISLE:
				return (
					<div className="md:w-12 md:h-12 w-8 h-8 flex items-center justify-center text-center font-medium text-sm mr-2">
						{rowNumber > 0 ? rowNumber : ''}
					</div>
				)
			case SEAT_TYPES.BLANK:
			case SEAT_TYPES.WING:
			case SEAT_TYPES.BULKHEAD:
				return null
			default:
				return <Seat seat={seat} seatIndex={seatIndex} />
		}
	}

	return generateRowItem(seat.storefrontSlotCode)
}

export default RowItem
