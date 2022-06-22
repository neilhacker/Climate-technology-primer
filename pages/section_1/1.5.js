import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Nav from '../../components/nav'
import sidebar from '../../components/sidebar'
import Collapsible from 'react-collapsible';
import Latex from 'react-latex-next'
import Script from 'next/script'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className={styles.main}>
      <script src="https://unpkg.com/@curvenote/article"></script>

        <Nav></Nav>
        <div>
          <article>
          <section >
            <h1 >1.5: Impacts - fires</h1>
              <p>
              <label for="mn_1_0" class="margin-toggle">&#8853;</label>
              <input type="checkbox" id="mn_1_0" class="margin-toggle"/>
              <span class="marginnote" id="mn_1_0">
          For a great look specifically at wildfires in California check out <a href="https://nintil.com/wildfires-california/">this pieces</a> by <a href="https://twitter.com/ArtirKel">José Luis Ricón Fernández de la Puente</a>
              </span> 

              One impact we see talked about a lot as being due to climate change is increases in forest fires around the world. Not so long ago cities in California woke up to an orange sky caused by some of the most severe wildfires in California history. The same year the world saw large swaths of Australia burning. 
              <br></br><br></br>
              If we consider the main causes of wildfires there are a few different areas, some natural, some human including climate, fuels, and land use. Fuels will typically effect how intense fires will be, land use will effect how likely fires are to start, and climate will effect both. 
              <br></br><br></br>
              On the fuel front, policies like fire suppression which actively try to avoid having more, but smaller, fires can lead to a build up of material that then contributes to increased intensity and reach when a fire does start. Most fires are started either directly by people or indirectly, such as through power lines. As there has been a greater build up in concentrations of people living around fire prone areas both of these become greater risks to fires starting. 
              <br></br><br></br>
              Climate has a number of ways it can influence fire risk. For example, <a href="https://link.springer.com/article/10.1186/s42408-019-0041-0">higher rainfall</a> in one year tends to lead to more fires the next year due largely to increased vegetation growth and periods of higher/lower rainfall may be driven by natural oscillations in the climate.
              <br></br><br></br>
              The other, probably more obvious, way climate can play a role is in leading to warmer temperatures which then make fuels dryer thus increasing both their likelihood to catch fire and the speed the fire can spread at. <a href="https://www.pnas.org/content/pnas/113/42/11770.full.pdf">One paper</a> finds that between 40-50% of the increase in aridity of fuels in US forests is likely due to climate change related reasons. This obviously isn’t the exact same thing as actual wildfires but aridity is strongly correlated as you can imagine. 
              <br></br><br></br>
              <a href="https://www.fs.fed.us/pnw/pubs/journals/pnw_2009_littell001.pdf">These</a> <a href="">studies</a> point to drought and increased temperature being the most important factors in promoting large fires but note that things are different in different regions. If you are still in doubt about how much climate can lead to fires this gif, based only on California, is rather suggestive that climate and destructive wildfires are pretty related. 
              <br></br>
              <blockquote class="twitter-tweet"><p lang="en" dir="ltr">I also created an animated version which helps to emphasize how weather conditions during California&#39;s fire season have evolved over time. <a href="https://twitter.com/hashtag/CaliforniaFires?src=hash&amp;ref_src=twsrc%5Etfw">#CaliforniaFires</a> <a href="https://twitter.com/hashtag/ClimateChange?src=hash&amp;ref_src=twsrc%5Etfw">#ClimateChange</a> <a href="https://t.co/gkuRrdn2ZG">pic.twitter.com/gkuRrdn2ZG</a></p>&mdash; Dr. Robert Rohde (@RARohde) <a href="https://twitter.com/RARohde/status/1061932207940530176?ref_src=twsrc%5Etfw">November 12, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              <br></br><br></br>
              <a href="https://www.forbes.com/sites/michaelshellenberger/2020/09/10/why-environmental-alarmism-makes-forest-fires-worse/">Some suggest</a> that while climate is important it is not the driving force behind why things are as bad as they are today, and that while
              <br></br><br></br>
              </p>
              <blockquote>
              <p>
              “Climate dries the [wood] fuels out and extends the fire season from 4-6 months to nearly year-round,” explains North, “but it’s not the cause of the intensity of the fires. The cause of that is fire suppression and the existing debt of wood fuel.”

              </p>
            </blockquote>
            <p>
            There is a somewhat subtle point, especially when looking at Californian fires, which is that climate change is likely making conditions more conducive to fires than it has been in the past but a large chunk of the uptick in devastation of fires is likely from more local reasons, such as population changes and fire exclusion practices. 
            <br></br><br></br>
            <label for="mn_1_1" class="margin-toggle">&#8853;</label>
            <input type="checkbox" id="mn_1_1" class="margin-toggle"/>
            <span class="marginnote" id="mn_1_1">
            i.e There is less certainty on severity as this is more down to management
            </span> 

            That being the case “<a href="https://link.springer.com/article/10.1007/s10021-001-0002-7">Based on climate projections</a> derived from global climate models over the West, these projections suggest a wide range of changes in biomass area burned (from declines of 80 percent to increases of 500 percent, depending on region, climate model, and emissions scenario)” 
            <br></br><br></br>
            So while humans are definitely contributing to increases in wildfires, especially on the economic damage side of things, a warming climate is presenting a significant source of increased risk. 
            <br></br><br></br>
            </p>



          
          </section>
          </article>
        </div>    
        <div class="footer">
        <p style={{fontSize: '5rem'}}><a href="../section_1/1.4">&#8678;</a> &nbsp; <a href="../section_1/1.6">&#8680;</a></p>
        </div> 

      </main>

    </div>
  )
}
