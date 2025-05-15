import type { Seat, SeatMapResponse } from '@/types/seat-map'

export enum SEAT_MAP_ACTIONS {
	SET_SEAT_MAP_DATA = 'SET_SEAT_MAP_DATA',
	SELECT_SEAT = 'SELECT_SEAT',
	CLEAR_SELECTED_SEAT = 'CLEAR_SELECTED_SEAT',
}

export type SEAT_MAP_ACTION_TYPES =
	| { type: SEAT_MAP_ACTIONS.SET_SEAT_MAP_DATA; payload: SeatMapResponse | null }
	| { type: SEAT_MAP_ACTIONS.SELECT_SEAT; payload: Seat | null }
	| { type: SEAT_MAP_ACTIONS.CLEAR_SELECTED_SEAT }
