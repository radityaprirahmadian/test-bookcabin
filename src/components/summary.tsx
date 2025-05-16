import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import { Button } from './ui/button'
import SeatDetailsMobile from './seat-details-mobile'

const Summary = () => {
	const { selectedSeat } = useSeatMapStore()

	const { amount, currency } = selectedSeat?.total?.alternatives?.[0]?.[0] ?? { amount: 0, currency: '' }

	return (
		<div className="md:p-2 w-full border-t-2 border-t-airline-primary-hover mx-auto">
			<div className="md:container mx-auto flex items-center flex-col md:flex-row justify-between">
				<SeatDetailsMobile />
				<div className="w-full px-2 py-4 md:px-0 md:py-0 md:w-auto flex items-center justify-between flex-row md:flex-col md:items-start">
					<p className="text-lg md:text-sm">Total</p>
					<p className="text-3xl font-bold">
						{amount} {currency}
					</p>
				</div>
				<div className="flex w-full md:w-fit items-center flex-col-reverse md:flex-row gap-0 md:gap-4">
					<Button size="xl" variant="outline" className="font-semibold w-full md:w-auto rounded-none md:rounded-md">
						Back
					</Button>
					<Button size="xl" className="font-semibold w-full md:w-auto rounded-none md:rounded-md">
						Continue
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Summary
