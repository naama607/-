import React from 'react';
import Header from './components/Header';
import RideProgress from './components/RideProgress';
import VerificationScreen from './components/VerificationScreen';
import RideDetailsScreen from './components/RideDetailsScreen';
import OfferRideScreen from './components/OfferRideScreen';
import SearchResultsScreen from './components/SearchResultsScreen';
import ChatScreen from './components/ChatScreen';
import PaymentScreen from './components/PaymentScreen';
import MyRidesScreen from './components/MyRidesScreen';
import HistoryScreen from './components/HistoryScreen';
import RatingScreen from './components/RatingScreen';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Header />
        <RideProgress />
        <VerificationScreen />
        <RideDetailsScreen />
        <OfferRideScreen />
        <SearchResultsScreen />
        <ChatScreen />
        <PaymentScreen />
        <MyRidesScreen />
        <HistoryScreen />
        <RatingScreen />
      </main>
    </React.Fragment>
  );
}

export default App;
