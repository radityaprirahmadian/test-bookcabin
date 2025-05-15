import type { Seat, SeatMapResponse } from '@/types/seat-map'
import seatMapData from '@/constants/seat-map-response.json'

export interface SeatMapState {
	seatMapData: SeatMapResponse | null
	selectedSeat: Seat | null
}

export const initialState: SeatMapState = {
	seatMapData: seatMapData as unknown as SeatMapResponse,
	selectedSeat: null,
}
