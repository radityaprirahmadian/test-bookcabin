export interface SeatMapResponse {
	seatsItineraryParts: SeatsItineraryPart[]
	selectedSeats: SelectedSeat[]
}

export interface SeatsItineraryPart {
	segmentSeatMaps: SegmentSeatMap[]
}

export interface SegmentSeatMap {
	passengerSeatMaps: PassengerSeatMap[]
	segment: Segment
}

export interface PassengerSeatMap {
	seatSelectionEnabledForPax: boolean
	seatMap: SeatMap
	passenger: Passenger
}

export interface SeatMap {
	rowsDisabledCauses: string[]
	aircraft: string
	cabins: Cabin[]
}

export interface Cabin {
	deck: string
	seatColumns: string[]
	seatRows: SeatRow[]
	firstRow: number
	lastRow: number
}

export interface SeatRow {
	rowNumber: number
	seatCodes: string[]
	seats: Seat[]
}

export interface Seat {
	slotCharacteristics?: string[]
	storefrontSlotCode: string
	available: boolean
	code?: string
	designations?: string[]
	entitled: boolean
	feeWaived: boolean
	entitledRuleId?: string
	feeWaivedRuleId?: string
	seatCharacteristics?: string[]
	limitations?: string[]
	refundIndicator?: string
	freeOfCharge: boolean
	prices?: PriceInfo
	taxes?: PriceInfo
	total?: PriceInfo
	originallySelected: boolean
	rawSeatCharacteristics?: string[]
}

export interface PriceInfo {
	alternatives: Array<Array<Price>>
}

export interface Price {
	amount: number
	currency: string
}

export interface Passenger {
	passengerIndex: number
	passengerNameNumber: string
	passengerDetails: PassengerDetails
	passengerInfo: PassengerInfo
	preferences: Preferences
	documentInfo: DocumentInfo
}

export interface PassengerDetails {
	firstName: string
	lastName: string
}

export interface PassengerInfo {
	dateOfBirth: string
	gender: string
	type: string
	emails: string[]
	phones: string[]
	address: Address
}

export interface Address {
	street1: string
	street2: string
	postcode: string
	state: string
	city: string
	country: string
	addressType: string
}

export interface Preferences {
	specialPreferences: SpecialPreferences
	frequentFlyer: FrequentFlyer[]
}

export interface SpecialPreferences {
	mealPreference: string
	seatPreference: string
	specialRequests: string[]
	specialServiceRequestRemarks: string[]
}

export interface FrequentFlyer {
	airline: string
	number: string
	tierNumber: number
}

export interface DocumentInfo {
	issuingCountry: string
	countryOfBirth: string
	documentType: string
	nationality: string
}

export interface Segment {
	'@type': string
	segmentOfferInformation: SegmentOfferInformation
	duration: number
	cabinClass: string
	equipment: string
	flight: Flight
	origin: string
	destination: string
	departure: string
	arrival: string
	bookingClass: string
	layoverDuration: number
	fareBasis: string
	subjectToGovernmentApproval: boolean
	segmentRef: string
}

export interface SegmentOfferInformation {
	flightsMiles: number
	awardFare: boolean
}

export interface Flight {
	flightNumber: number
	operatingFlightNumber: number
	airlineCode: string
	operatingAirlineCode: string
	stopAirports: string[]
	departureTerminal: string
	arrivalTerminal: string
}

export interface SelectedSeat {
	seatCode: string
	rowNumber: number
	price: number
	currency: string
}
