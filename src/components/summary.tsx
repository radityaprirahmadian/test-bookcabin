import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import { Button } from './ui/button'
import SeatDetailsMobile from './seat-details-mobile'

const Summary = () => {
	const { selectedSeat } = useSeatMapStore()

	const { amount, currency } = selectedSeat?.total?.alternatives?.[0]?.[0] ?? { amount: 0, currency: '' }

	return (
		<div className="p-2 w-full border-t-2 border-t-airline-primary-hover mx-auto">
			<SeatDetailsMobile />
			<div className="md:container mx-auto flex items-center flex-row justify-between">
				<div className="px-0 py-0  flex justify-between flex-col items-start">
					<p className="text-lg md:text-sm">Total</p>
					<p className="text-3xl font-bold">
						{amount} {currency}
					</p>
				</div>
				<div className="flex items-center flex-col-reverse md:flex-row gap-2 md:gap-4">
					<Button size="xl" variant="outline" className="font-semibold w-full md:w-auto">
						Back
					</Button>
					<Button size="xl" className="font-semibold w-full md:w-auto">
						Continue
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Summary
