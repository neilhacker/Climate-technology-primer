import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    document.getElementById("mySidenav").style.maxWidth = "520px";

    document.getElementById("mySidenav").style.boxShadow = "0 0 0 10000vmax rgba(0,0,0,.6)";
    document.getElementById("mySidenav").style.boxShadow = "0 0 0 10000px rgba(0,0,0,.6)";
    }


function closeNav() {
    document.getElementById("mySidenav").style.boxShadow = "none";
    document.getElementById("mySidenav").style.width = "0";
    }

export default function Nav() {
    
  return (
    <div className={styles.container}>
      <Head>
        <title>CTP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <nav >
        <ul>
            <li  style={{paddingTop: '9%'}}><a href="../" className={styles.headertext} style={{textDecoration: 'none', fontWeight: 'bold'}} id="header_text" >CTP</a></li>
        </ul>
        
        <ul> 
            <li><div id="header_menu" onClick={() => openNav()}>&#9776;</div></li>
        </ul>
      </nav>

      <div id="mySidenav" className="sidebar" >
            <a className="closebtn" onClick={() => closeNav()} >&times;</a>
    
            <ul style={{listStyle: 'none', padding: '0'}} onClick={() => closeNav()} >
            <br></br>
                {/* <li className="top active"><a href="./" style={{textDecoration: 'none', fontWeight: 'bold'}} >Intro</a></li> */}
                <li className="top active"><a href="../acknowledgements" style={{textDecoration: 'none', fontWeight: 'bold'}} >Acknowledgements</a></li>

                <li className="top active"><a href="../disclaimers" style={{textDecoration: 'none', fontWeight: 'bold'}} >Disclaimers </a></li>

                <li className="introduction" style={{ fontWeight: 'bold'}}>Section 1: Climate overview</li>
                <ul style={{listStyle: 'none'}}>
                    <li style={{textDecoration: 'none'}}><a href="../section_1/1.0"  >1.0 Introduction</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_1/1.1"  >1.1 Basic numbers on climate</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_1/1.2"  >1.2 Climate sensitivity</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_1/1.3"  >1.3 The need for detailed simulations</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_1/1.4"  >1.4 Impacts - Sea levels</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_1/1.5"  >1.5 Impacts - fires</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_1/1.6"  >1.6 Emissions</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_1/1.7"  >1.7 Carbon free grid and Nuclear</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_1/1.8"  >1.8 Variable renewables</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_1/1.9"  >1.9 Geothermal</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_1/1.10"  >1.10 Thermal storage</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_1/1.11"  >1.11 Carbon tax</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_1/1.12"  >1.12 Some take-aways</a></li>
                </ul>

                <li className="introduction" style={{fontWeight: 'bold'}}>Section 2: Carbon removal</li>
                <ul style={{listStyle: 'none'}}>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.0"  >2.0 Introduction</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.1"  >2.1 Fundamental energy and space requirements</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.2"  >2.2 Two climate dynamics to be aware off</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.3"  >2.3 DAC</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.4"  >2.4 DAC + minerals</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.5"  >2.5 Other chemical methods</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.6"  >2.6 Biological methods - Land</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.7"  >2.7 Bioengineering on land</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.8"  >2.8 Biomass burial</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.9"  >2.9 Oceans - fertilization</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.10"  >2.10 Oceans - macro-algae</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.11"  >2.11 Oceans - alkalinity enhancement</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.12"  >2.12 Oceans - bioengineering</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.13"  >2.13 The NAS report</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_2/2.14"  >2.14 Some take-aways</a></li>
                </ul>

                <li className="introduction" style={{fontWeight: 'bold'}}>Section 3: Geoengineering</li>
                <ul style={{listStyle: 'none'}}>
                    <li style={{textDecoration: 'none'}}><a href="../section_3/3.0"  >3.0 Introduction</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_3/3.1"  >3.1 Existing interventions</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_3/3.2"  >3.2 Albedo modification</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_3/3.3"  >3.3 Cloud whitening/brightening</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_3/3.4"  >3.4 Space based sun-shades</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_3/3.5"  >3.5 Other kinds of interventions</a></li>
                    <li style={{textDecoration: 'none'}}><a href="../section_3/3.6"  >3.6 Some take-aways</a></li>
                </ul>

            </ul>       
        </div>

      </main>

    </div>
  )
}
