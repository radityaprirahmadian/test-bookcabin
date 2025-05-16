import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'
import { useSeatMapStore } from '@/hooks/use-seat-map-store'
import SeatCharacteristics from './seat-characteristics'
import { cn } from '@/lib/utils'

const SeatDetailsMobile = () => {
	const { selectedSeat } = useSeatMapStore()
	const [isOpen, setIsOpen] = useState(false)

	if (!selectedSeat) {
		return null
	}

	return (
		<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full px-4 flex flex-col items-center md:hidden">
			<CollapsibleTrigger asChild>
				<Button variant="ghost" size="sm">
					<ChevronUp className={cn('h-6 w-6', isOpen && 'rotate-180')} />
				</Button>
			</CollapsibleTrigger>

			<CollapsibleContent className="flex items-start justify-start gap-4 w-full">
				<div className="flex justify-center">
					<div className="w-12 h-12 rounded-md border-2 bg-blue-100 border-blue-500 flex items-center justify-center font-bold">
						{selectedSeat.code}
					</div>
				</div>
				<SeatCharacteristics />
			</CollapsibleContent>
		</Collapsible>
	)
}

export default SeatDetailsMobile
