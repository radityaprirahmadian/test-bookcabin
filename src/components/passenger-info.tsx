import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import { ArrowRight, User } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useState } from 'react'

const PassengerInfo = () => {
	const { seatMapData } = useSeatMapStore()
	const [detailOpened, setDetailOpened] = useState<boolean>(false)

	const passengerData = seatMapData?.passengerSeatMaps?.[0]?.passenger

	if (!passengerData) {
		return null
	}

	const { passengerDetails, passengerInfo, preferences } = passengerData

	return (
		<div>
			<div className="flex items-center gap-2 text-lg">Choose seat for:</div>

			<div
				className="flex items-center cursor-pointer justify-between gap-2 border-b-2 border-b-airline-primary-hover"
				onClick={() => setDetailOpened(true)}
			>
				<p className="font-medium text-2xl">
					{passengerDetails.firstName} {passengerDetails.lastName}
				</p>
				<ArrowRight className="h-6 w-6 text-airline-primary-hover" />
			</div>

			<Dialog open={detailOpened} onOpenChange={setDetailOpened}>
				<DialogContent className="sm:max-w-(--breakpoint-sm)">
					<DialogHeader className="pb-2">
						<DialogTitle className="flex items-center w-fit pb-2 pe-2 gap-2">
							<User className="h-5 w-5" />
							Passanger Information
						</DialogTitle>
					</DialogHeader>
					<div className="flex flex-col gap-4">
						<div>
							<h3 className="text-sm font-medium text-gray-500">Passenger Type</h3>
							<p className="font-medium">
								{passengerDetails.firstName} {passengerDetails.lastName}
							</p>
						</div>
						<div>
							<h3 className="text-sm font-medium text-gray-500">Passenger Type</h3>
							<p className="font-medium">{passengerInfo.type}</p>
						</div>

						{passengerInfo.emails && passengerInfo.emails.length > 0 && (
							<div>
								<h3 className="text-sm font-medium text-gray-500">Email</h3>
								<p className="font-medium">{passengerInfo.emails[0]}</p>
							</div>
						)}

						{preferences?.frequentFlyer && preferences.frequentFlyer.length > 0 && (
							<div>
								<h3 className="text-sm font-medium text-gray-500">Frequent Flyer</h3>
								<p className="font-medium">
									{preferences.frequentFlyer[0].airline}: {preferences.frequentFlyer[0].number}
								</p>
							</div>
						)}
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default PassengerInfo
