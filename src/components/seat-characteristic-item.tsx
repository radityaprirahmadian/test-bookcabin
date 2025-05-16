import { SEAT_LIMITATIONS } from '@/constants/seat'

interface SeatCharacteristicItemProps {
	characteristic: string
	isLimitation?: boolean
}

const SeatCharacteristicItem = ({ characteristic, isLimitation = false }: SeatCharacteristicItemProps) => {
	if (!characteristic) return null

	const limitationObj = isLimitation
		? Object.values(SEAT_LIMITATIONS).find((limit) => limit.value === characteristic)
		: null

	const text = limitationObj?.desc
	const color = isLimitation ? 'bg-red-500' : 'bg-blue-500'

	return (
		<div className="flex items-center gap-2">
			<div className={`w-2 h-2 rounded-full ${color}`} />
			<p className="text-sm">{text || characteristic}</p>
		</div>
	)
}

export default SeatCharacteristicItem
