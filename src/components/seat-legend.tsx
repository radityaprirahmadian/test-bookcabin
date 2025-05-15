export default function SeatLegend() {
	const legendItems = [
		{ color: 'bg-green-100 border-green-500', label: 'Available', description: 'Seat is available for selection' },
		{ color: 'bg-gray-100 border-gray-500', label: 'Unavailable', description: 'Seat is not available' },
		{ color: 'bg-blue-100 border-blue-500', label: 'Selected', description: 'Your selected seat' },
		{ color: 'bg-amber-100 border-amber-500', label: 'Premium', description: 'Premium seat (extra cost)' },
		{ color: 'bg-purple-100 border-purple-500', label: 'Exit Row', description: 'Exit row seat' },
		{ color: 'bg-red-100 border-red-500', label: 'Restricted', description: 'Restricted seat' },
	]

	return (
		<div className="flex gap-6 items-center justify-center">
			{legendItems.map((item, index) => (
				<div key={index} className="flex items-center gap-2">
					<div className={`w-8 h-8 rounded-md border-2 ${item.color} flex items-center justify-center`}>
						<span className="text-xs font-medium">A1</span>
					</div>
					<div>
						<p className="text-sm font-medium">{item.label}</p>
						<p className="text-xs text-gray-500">{item.description}</p>
					</div>
				</div>
			))}
		</div>
	)
}
