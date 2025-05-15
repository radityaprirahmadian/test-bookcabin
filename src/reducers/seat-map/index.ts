import { SEAT_MAP_ACTIONS, type SEAT_MAP_ACTION_TYPES } from './actions'
import { useReducer } from 'react'
import { initialState, type SeatMapState } from './initial-state'

const useSeatMapReducer = () => {
	const reducer = (state: SeatMapState, action: SEAT_MAP_ACTION_TYPES): SeatMapState => {
		switch (action.type) {
			case SEAT_MAP_ACTIONS.SET_SEAT_MAP_DATA:
				return {
					...state,
					seatMapData: action.payload,
				}
			case SEAT_MAP_ACTIONS.SELECT_SEAT:
				return {
					...state,
					selectedSeat: action.payload,
				}
			case SEAT_MAP_ACTIONS.CLEAR_SELECTED_SEAT:
				return {
					...state,
					selectedSeat: null,
				}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	return {
		state,
		dispatch,
	}
}

export default useSeatMapReducer
