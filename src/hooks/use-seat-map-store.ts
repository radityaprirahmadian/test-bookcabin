import { useContext } from 'react'
import { SeatMapContext } from '../contexts/seat-map-context'

export function useSeatMapStore() {
	const context = useContext(SeatMapContext)
	if (context === undefined) {
		throw new Error('useSeatMapStore must be used within a SeatMapProvider')
	}
	return context
}
