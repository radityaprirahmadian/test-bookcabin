import { SEAT_CHARACTERISTICS, SEAT_COLORS, SEAT_LIMITATIONS } from '@/constants/seat'
import type { Seat } from '@/types/seat-map'

function getSeatStyleFromCharacteristics(characteristics: string[] | undefined): string | undefined {
	if (!characteristics) return undefined

	for (const char of characteristics) {
		if (char === SEAT_CHARACTERISTICS.EXIT_ROW.code) return SEAT_COLORS.EXIT_ROW
		if (char === SEAT_CHARACTERISTICS.EXTRA_LEGROOM.code) return SEAT_COLORS.EXTRA_LEGROOM
		if (char === SEAT_CHARACTERISTICS.FRONT_OF_CABIN.code) return SEAT_COLORS.FRONT_CABIN
	}
	return undefined
}

export function getSeatTypeClass(seat: Seat) {
	const styleFromCharacteristics = getSeatStyleFromCharacteristics(seat.rawSeatCharacteristics)

	if (styleFromCharacteristics) return styleFromCharacteristics
	if (seat.limitations?.length) return SEAT_COLORS.RESTRICTED
	if (seat.available) return SEAT_COLORS.AVAILABLE

	return SEAT_COLORS.UNAVAILABLE
}

export function getSeatCharacteristicsLabels(seat: Seat) {
	const characteristics: string[] = []

	if (!seat.rawSeatCharacteristics) {
		return characteristics
	}

	// Filter out limitations
	const filteredCharacteristics = seat.rawSeatCharacteristics.filter(
		(char) => !Object.values(SEAT_LIMITATIONS).some((limitation: { code: string }) => limitation.code === char)
	)

	filteredCharacteristics.forEach((char: string) => {
		const characteristic = Object.entries(SEAT_CHARACTERISTICS).find(
			([, value]: [string, { code: string; desc: string }]) => value.code === char
		)

		if (characteristic) {
			characteristics.push(characteristic?.[1]?.desc ?? '')
		} else {
			characteristics.push(char)
		}
	})

	return characteristics
}
