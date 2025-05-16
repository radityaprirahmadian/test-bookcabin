import type { Seat, SegmentSeatMap } from '@/types/seat-map'
import seatMapData from '@/data/seat-map-response.json'

export interface SeatMapState {
	seatMapData: SegmentSeatMap | null
	selectedSeat: Seat | null
}

export const initialState: SeatMapState = {
	seatMapData: seatMapData?.seatsItineraryParts?.[0]?.segmentSeatMaps[0] as unknown as SegmentSeatMap,
	selectedSeat: null,
}
