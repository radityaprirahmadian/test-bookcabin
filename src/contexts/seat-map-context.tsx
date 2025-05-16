/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode, type Dispatch } from 'react'
import type { Seat } from '../types/seat-map'
import { SEAT_MAP_ACTIONS, type SEAT_MAP_ACTION_TYPES } from '@/reducers/seat-map/actions'
import useSeatMapReducer from '@/reducers/seat-map'
import type { SeatMapState } from '@/reducers/seat-map/initial-state'

export interface SeatMapContextType extends SeatMapState {
	dispatch: Dispatch<SEAT_MAP_ACTION_TYPES>
	setSelectedSeat: (seat: Seat | null) => void
	clearSelectedSeat: () => void
}

export const SeatMapContext = createContext<SeatMapContextType | undefined>(undefined)

export function SeatMapProvider({ children }: { children: ReactNode }) {
	const { state, dispatch } = useSeatMapReducer()

	const setSelectedSeat = (seat: Seat | null) =>
		dispatch({
			type: SEAT_MAP_ACTIONS.SELECT_SEAT,
			payload: seat,
		})

	const clearSelectedSeat = () =>
		dispatch({
			type: SEAT_MAP_ACTIONS.CLEAR_SELECTED_SEAT,
		})

	return (
		<SeatMapContext.Provider
			value={{
				...state,
				dispatch,
				setSelectedSeat,
				clearSelectedSeat,
			}}
		>
			{children}
		</SeatMapContext.Provider>
	)
}
