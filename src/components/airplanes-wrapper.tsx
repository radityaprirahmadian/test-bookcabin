import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

const AirplanesWrapper = ({ children }: { children: ReactNode }) => {
	const { selectedSeat } = useSeatMapStore()

	return (
		<div className={cn('mb-32 md:mb-12 relative h-fit', selectedSeat && 'mb-48')}>
			{children}
			<div className="absolute top-0 bottom-0 flex flex-col left-0 right-0">
				<div
					style={{ borderRadius: '51% 49% 100% 0% / 100% 100% 0% 0%' }}
					className="bg-white w-full aspect-[1/1] shadow-lg -z-10"
				></div>
				<div className="pb-10 flex-grow bg-white border-b-2 shadow-lg"></div>
			</div>
		</div>
	)
}

export default AirplanesWrapper
