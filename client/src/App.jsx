import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PlannerCard from './components/PlannerCard';
import VehicleSelection from './components/VehicleSelection';
import NearbyPlaces from './components/NearbyPlaces';
import TripSummary from './components/TripSummary';
import Footer from './components/Footer';
import { ShieldAlert, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

function App() {
  // 1. Centralized planning state
  const [tripDetails, setTripDetails] = useState({
    tripType: 'One Way',
    pickup: 'Bhopal, MP',
    destination: 'Ujjain, MP',
    pickupDate: '12 Jun, 2026',
    returnDate: '14 Jun, 2026',
    passengers: 5,
    vehiclePreference: 'Any Vehicle',
  });

  // 2. Selected vehicle profiles
  const [selectedVehicle, setSelectedVehicle] = useState('Toyota Innova Crysta');
  const [baseFare, setBaseFare] = useState(9800);

  // 3. Excursion selections
  const [addedPlaces, setAddedPlaces] = useState([]);

  // 4. Responsive viewport state
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSummaryOpen, setMobileSummaryOpen] = useState(false);

  // Check window resizing for mobile adaptations
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update base fare automatically if passenger preferences suggest different sizes
  useEffect(() => {
    if (tripDetails.vehiclePreference !== 'Any Vehicle') {
      if (tripDetails.vehiclePreference === 'Toyota Innova Crysta') {
        setSelectedVehicle('Toyota Innova Crysta');
        setBaseFare(9800);
      } else if (tripDetails.vehiclePreference === 'Maruti Dzire') {
        setSelectedVehicle('Maruti Dzire');
        setBaseFare(6300);
      } else if (tripDetails.vehiclePreference === 'Tempo Traveller') {
        setSelectedVehicle('Tempo Traveller');
        setBaseFare(14500);
      }
    }
  }, [tripDetails.vehiclePreference]);

  // Compute total accumulated pricing
  const placesCost = addedPlaces.reduce((sum, item) => sum + item.cost, 0);
  const totalFare = baseFare + placesCost;

  // Handles adding/removing scenic places to the route
  const handleTogglePlace = (place) => {
    setAddedPlaces((prev) => {
      const exists = prev.some((p) => p.id === place.id);
      if (exists) {
        return prev.filter((p) => p.id !== place.id);
      } else {
        confetti({
          particleCount: 20,
          spread: 40,
          colors: ['#A78BFA', '#7DD3FC'],
          origin: { y: 0.85 }
        });
        return [...prev, place];
      }
    });
  };

  // Switch selected car profiles directly
  const handleSelectVehicle = (carId, fare) => {
    setSelectedVehicle(carId);
    setBaseFare(fare);
    setTripDetails((prev) => ({
      ...prev,
      vehiclePreference: carId
    }));
    if (isMobile) {
      setMobileSummaryOpen(true);
    }
  };

  // Start Planning anchor trigger
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#A78BFA', '#7DD3FC', '#FFD8BE']
    });
    scrollToSection('vehicles');
  };

  return (
    <div className="relative min-h-screen bg-[#EEF2F8] text-brand-dark flex flex-col selection:bg-brand-lavender/35" style={{ overflowX: 'hidden' }}>
      {/* Visual background ambient layers */}
      <div className="fixed top-[8%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-brand-lavender/5 blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-[45%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none z-0" />

      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <Hero
        onStartPlanning={() => scrollToSection('planner')}
        onExploreVehicles={() => scrollToSection('vehicles')}
      />

      {/* Main Glass Floating Planner */}
      <PlannerCard
        tripDetails={tripDetails}
        onTripDetailsChange={setTripDetails}
        onSearch={handleSearch}
      />

      {/* Smart UX Recommendation banner */}
      {tripDetails.passengers > 4 && selectedVehicle === 'Maruti Dzire' && (
        <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 mb-6">
          <div className="flex items-start gap-3 px-4 py-3.5 bg-orange-50 border border-orange-200 text-orange-800 rounded-2xl text-xs font-semibold shadow-sm">
            <ShieldAlert className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Smart Suggestion: </span>
              You have selected <span className="font-bold">{tripDetails.passengers} passengers</span>, but your current choice (<span className="font-bold">Maruti Dzire</span>) seats up to 4. We recommend the{' '}
              <span className="font-bold text-brand-lavender">Toyota Innova Crysta</span> or{' '}
              <span className="font-bold text-brand-lavender">Tempo Traveller</span>.
            </div>
          </div>
        </div>
      )}

      {/* Two Column Layout Block: Content & Sticky Summary */}
      <main className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 mb-28 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Left Side Content Column */}
          <div className="lg:col-span-8 w-full flex flex-col gap-4 min-w-0">
            {/* Vehicle Selection list */}
            <VehicleSelection
              selectedVehicle={selectedVehicle}
              onSelectVehicle={handleSelectVehicle}
            />

            {/* Scenic Nearby Places */}
            <NearbyPlaces
              addedPlaces={addedPlaces}
              onTogglePlace={handleTogglePlace}
            />
          </div>

          {/* Right Side Column (Itinerary sticky panel on desktop) */}
          {!isMobile && (
            <div className="lg:col-span-4 w-full min-w-0">
              <TripSummary
                tripDetails={tripDetails}
                addedPlaces={addedPlaces}
                totalFare={totalFare}
                isMobile={false}
              />
            </div>
          )}
        </div>
      </main>

      {/* Mobile Floating Bottom Bar Trigger */}
      {isMobile && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-sm">
          <div className="glass rounded-[20px] p-3.5 flex items-center justify-between shadow-2xl border border-white/80 backdrop-blur-xl">
            <div className="text-left pl-1.5">
              <span className="text-[10px] font-bold text-brand-gray uppercase tracking-widest block">Est. Fare</span>
              <span className="text-lg font-extrabold text-brand-dark">₹ {totalFare.toLocaleString('en-IN')}</span>
            </div>

            <button
              onClick={() => setMobileSummaryOpen(true)}
              className="px-5 py-2.5 bg-brand-dark text-white rounded-xl text-xs font-bold shadow-md shadow-brand-dark/15 hover:shadow-brand-dark/30 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span>Review Itinerary</span>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Bottom Sheet Modal */}
      {isMobile && (
        <TripSummary
          tripDetails={tripDetails}
          addedPlaces={addedPlaces}
          totalFare={totalFare}
          isMobile={true}
          isOpen={mobileSummaryOpen}
          onClose={() => setMobileSummaryOpen(false)}
        />
      )}

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
