import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { LEGEND_ITEMS } from '@/constants/legend'

const SeatLegend = () => {
	return (
		<div className="p-4 w-full lg:w-10/12 mx-auto">
			<Carousel opts={{ align: 'center' }} className="">
				<CarouselContent>
					{LEGEND_ITEMS.map((item, index) => (
						<CarouselItem key={index} className="flex items-center gap-2 basis-1/2 sm:basis-1/3 lg:basis-1/6">
							<div
								className={`w-8 h-8 rounded-md border-2 aspect-square ${item.color} flex items-center justify-center`}
							>
								<span className="text-xs font-medium">A1</span>
							</div>
							<div>
								<p className="text-sm font-medium">{item.label}</p>
								<p className="text-xs text-gray-500">{item.description}</p>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="lg:hidden" />
				<CarouselNext className="lg:hidden" />
			</Carousel>
		</div>
	)
}

export default SeatLegend
