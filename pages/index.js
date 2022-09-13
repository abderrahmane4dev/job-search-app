import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import HeroSection from '../components/heroSection'
import Sponsor from '../components/Sponsor'
import Categories from '../components/Categories'
import Profile from '../components/CreateProfile'
import Finder from '../components/find'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
export default function Home() {
  return (
    <> 
      <Head>
        <title>Job Search</title>  
        <meta name="description" content="this a website for job searchers and recruiters " />
        <meta name="keywords" content="HTML, CSS, JavaScript,Job,Search,Recruitement,Opportunities,Web,Orange"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
     <Navbar/>
     <HeroSection/>
     <Sponsor/>
     <Categories/>
     <Profile/>
     <Finder/>
     <Newsletter/>
     <Footer/>
     </>
  )
}
