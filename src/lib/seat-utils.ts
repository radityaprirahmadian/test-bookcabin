import type { Seat } from '@/types/seat-map'

export function getSeatTypeClass(seat: Seat) {
	// Exit row seats
	if (seat.rawSeatCharacteristics?.includes('E')) {
		return 'bg-purple-100 border-purple-500'
	}

	// Premium seats (higher price)
	if (seat.total && seat.total.alternatives?.[0]?.[0]?.amount >= 50) {
		return 'bg-amber-100 border-amber-500'
	}

	// Seats with limitations
	if (seat.limitations?.length) {
		return 'bg-red-100 border-red-500'
	}

	// Regular available seats
	if (seat.available) {
		return 'bg-green-100 border-green-500'
	}

	// Unavailable seats
	return 'bg-gray-100 border-gray-500'
}

export function getSeatCharacteristicsLabels(seat: Seat) {
	const characteristics: string[] = []

	if (!seat.seatCharacteristics) {
		return characteristics
	}

	seat.seatCharacteristics.forEach((char: string) => {
		switch (char) {
			case 'W':
				characteristics.push('Window Seat')
				break
			case 'A':
				characteristics.push('Aisle Seat')
				break
			case '9':
				characteristics.push('Middle Seat')
				break
			case 'CH':
				characteristics.push('Chargeable Seat')
				break
			default:
				characteristics.push(char)
		}
	})

	if (seat.designations) {
		seat.designations.forEach((designation: string) => {
			characteristics.push(designation.replace(/_/g, ' '))
		})
	}

	return characteristics
}
