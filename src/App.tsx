import NavigationBar from './components/navigation-bar'
import SeatMapContainer from './components/seat-map-container'
import { SeatMapProvider } from './contexts/seat-map-context'

const App = () => {
	return (
		<main className="min-h-screen w-screen bg-gray-100">
			<SeatMapProvider>
				<NavigationBar />
				<SeatMapContainer />
			</SeatMapProvider>
		</main>
	)
}

export default App
