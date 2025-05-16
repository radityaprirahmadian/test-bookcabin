export const SEAT_TYPES = {
	BLANK: 'BLANK',
	AISLE: 'AISLE',
	SEAT: 'SEAT',
	WING: 'WING',
	BULKHEAD: 'BULKHEAD',
	LEFT_SIDE: 'LEFT_SIDE',
	RIGHT_SIDE: 'RIGHT_SIDE',
	EXIT: 'EXIT',
} as const

export const SEAT_CHARACTERISTICS = {
	WINDOW: { code: 'W', desc: 'Window Seat' },
	AISLE: { code: 'A', desc: 'Aisle Seat' },
	MIDDLE: { code: '9', desc: 'Middle Seat' },
	CHILD_FRIENDLY: { code: 'CH', desc: 'Child Friendly Seat' },
	EXIT_ROW: { code: 'E', desc: 'Exit Row Seat' },
	FRONT_OF_CABIN: { code: 'FC', desc: 'Front of Cabin Seat' },
	WING_AREA: { code: 'OW', desc: 'Wing Area Seat' },
	LEFT_SIDE: { code: 'LS', desc: 'Left Side Seat' },
	RIGHT_SIDE: { code: 'RS', desc: 'Right Side Seat' },
	KITCHEN: { code: 'K', desc: 'Near Kitchen' },
	SEAT_72: { code: '72', desc: '' },
	EXTRA_LEGROOM: { code: 'L', desc: 'Extra Legroom Seat' },
	NOT_ALLOWED_FOR_INFANT: { code: '1A', desc: 'Not Allowed for Infant' },
	NOT_ALLOWED_FOR_MEDICAL: { code: '1B', desc: 'Not Allowed for Medical' },
	VACANT: { code: 'V', desc: 'Vacant Seat' },
} as const

export const SEAT_LIMITATIONS = {
	NOT_ALLOWED_FOR_INFANT: { code: '1A', value: 'NOT_ALLOWED_FOR_INFANT', desc: 'Not Allowed for Infant' },
	NOT_ALLOWED_FOR_MEDICAL: { code: '1B', value: 'NOT_ALLOWED_FOR_MEDICAL', desc: 'Not Allowed for Medical' },
}

export const SEAT_COLORS = {
	AISLE: 'bg-transparent',
	BLANK: 'bg-transparent',
	WING: 'bg-gray-200',
	BULKHEAD: 'bg-gray-300 border-b-4 border-gray-500',
	AVAILABLE: 'bg-green-100 border-green-500',
	UNAVAILABLE: 'bg-gray-100 border-gray-500',
	SELECTED: 'bg-blue-100 border-blue-500',
	FRONT_CABIN: 'bg-pink-100 border-pink-500',
	EXTRA_LEGROOM: 'bg-amber-100 border-amber-500',
	EXIT_ROW: 'bg-purple-100 border-purple-500',
	RESTRICTED: 'bg-red-100 border-red-500',
} as const

export const SEAT_LEGENDS = [
	{ color: SEAT_COLORS.AVAILABLE, label: 'Available', description: 'Seat is available' },
	{ color: SEAT_COLORS.UNAVAILABLE, label: 'Unavailable', description: 'Seat is not available' },
	{ color: SEAT_COLORS.SELECTED, label: 'Selected', description: 'Your selected seat' },
	{ color: SEAT_COLORS.FRONT_CABIN, label: 'Front Cabin', description: 'Front cabin seat' },
	{ color: SEAT_COLORS.EXTRA_LEGROOM, label: 'Extra Legroom', description: 'Extra legroom seat' },
	{ color: SEAT_COLORS.EXIT_ROW, label: 'Exit Row', description: 'Exit row seat' },
	{ color: SEAT_COLORS.RESTRICTED, label: 'Restricted', description: 'Restricted seat' },
] as const
