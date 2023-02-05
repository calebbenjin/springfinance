import Hero from '../components/Hero'
import SavingSection from '../components/SavingSection'
import ChooseSection from '../components/ChooseSection'
import { FaWhatsappSquare } from 'react-icons/fa'
import Link from 'next/link'
import MobileSection from '../components/MobileSection'
import CardSection from '../components/CardSection'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TradingWiget from '../components/TradingWiget'

export default function Home() {

  
  return (
    <>
      <Header />
      <Hero />
      <TradingWiget />
      <ChooseSection />
      <SavingSection />
      <MobileSection />
      <CardSection />
      <Footer />
    </>
  )
}
