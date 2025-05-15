import type { Seat, SeatMapResponse } from '@/types/seat-map'

// Action types
export const SET_SEAT_MAP_DATA = 'SET_SEAT_MAP_DATA' as const
export const SELECT_SEAT = 'SELECT_SEAT' as const
export const CLEAR_SELECTED_SEAT = 'CLEAR_SELECTED_SEAT' as const

// State type
export interface SeatMapState {
	seatMapData: SeatMapResponse | null
	selectedSeat: Seat | null
}

// Action types
type SetSeatMapDataAction = { type: typeof SET_SEAT_MAP_DATA; payload: SeatMapResponse | null }
type SelectSeatAction = { type: typeof SELECT_SEAT; payload: Seat | null }
type ClearSelectedSeatAction = { type: typeof CLEAR_SELECTED_SEAT }

export type SeatMapAction = SetSeatMapDataAction | SelectSeatAction | ClearSelectedSeatAction

// Initial state
export const initialState: SeatMapState = {
	seatMapData: null,
	selectedSeat: null,
}

// Action creators
export const setSeatMapData = (data: SeatMapResponse | null): SetSeatMapDataAction => ({
	type: SET_SEAT_MAP_DATA,
	payload: data,
})

export const selectSeat = (seat: Seat | null): SelectSeatAction => ({
	type: SELECT_SEAT,
	payload: seat,
})

export const clearSelectedSeat = (): ClearSelectedSeatAction => ({
	type: CLEAR_SELECTED_SEAT,
})

// Reducer
export function seatMapReducer(state: SeatMapState = initialState, action: SeatMapAction): SeatMapState {
	switch (action.type) {
		case SET_SEAT_MAP_DATA:
			return {
				...state,
				seatMapData: action.payload,
			}
		case SELECT_SEAT:
			return {
				...state,
				selectedSeat: action.payload,
			}
		case CLEAR_SELECTED_SEAT:
			return {
				...state,
				selectedSeat: null,
			}
		default:
			return state
	}
}
