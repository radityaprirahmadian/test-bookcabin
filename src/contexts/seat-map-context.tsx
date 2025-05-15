/* eslint-disable react-refresh/only-export-components */
'use client'

import { createContext, useReducer, type ReactNode, type Dispatch } from 'react'
import type { Seat, SeatMapResponse } from '../types/seat-map'
import {
	seatMapReducer,
	initialState,
	type SeatMapAction,
	type SeatMapState,
	setSeatMapData as setSeatMapDataAction,
	selectSeat as selectSeatAction,
	clearSelectedSeat as clearSelectedSeatAction,
} from '../reducers/seat-map-reducer'

export interface SeatMapContextType extends SeatMapState {
	dispatch: Dispatch<SeatMapAction>
	setSeatMapData: (data: SeatMapResponse | null) => void
	setSelectedSeat: (seat: Seat | null) => void
	clearSelectedSeat: () => void
}

export const SeatMapContext = createContext<SeatMapContextType | undefined>(undefined)

export function SeatMapProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(seatMapReducer, initialState)

	// Helper functions that wrap dispatch
	const setSeatMapData = (data: SeatMapResponse | null) => {
		dispatch(setSeatMapDataAction(data))
	}

	const setSelectedSeat = (seat: Seat | null) => {
		dispatch(selectSeatAction(seat))
	}

	const clearSelectedSeat = () => {
		dispatch(clearSelectedSeatAction())
	}

	return (
		<SeatMapContext.Provider
			value={{
				...state,
				dispatch,
				setSeatMapData,
				setSelectedSeat,
				clearSelectedSeat,
			}}
		>
			{children}
		</SeatMapContext.Provider>
	)
}
