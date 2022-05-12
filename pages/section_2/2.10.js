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
            <h1 >Ocean alkalinity enhancement</h1>
              
            <p>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
                CaCO₃ + CO₂ + H₂0 - Ca²+   2HCO₃- 

			</span> 

            The ocean is a massive carbon sink, containing more than 50 times more CO₂ than the atmosphere. Much of this CO₂ is dissolved in the water and if we raise the alkalinity of this water the dissolved CO₂ becomes bicarbonate and carbonate ions. 
            <br></br><br></br>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            There is also the, not small, additional benefit of directly lowering the pH of the ocean itself as the name suggests.
			</span> 

            The basic idea is to add crushed minerals to the surface of the ocean/or in seawater reactors, to accelerate this natural process. Turning CO₂ into bicarbonate and carbonate ions means that it won’t be able to be released again back into the atmosphere and the reaction is also incredibly unlikely to reverse so we get permanent carbon removal by doing this.
            <br></br><br></br>
            This approach has not had any large scale trials run¹,
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            ¹ Although there is a very recent <a href="https://www.additionalventures.org/initiatives/climate-action/ocean-alkalinity-enhancement-research-program/">research program</a> that just started
			</span> 
            largely for similar reasons that iron fertilization hasn’t been scaled up more. We don’t really know the ecosystem wide effects yet and they are very difficult to predict in advance.
            <br></br><br></br>
            There are also lots of open questions when it comes to OEA, where are the best locations for deployment, how frequently should enhancements be added, how intense should they be, etc.
            <br></br><br></br>
            <b>Costs</b>
            <br></br><br></br>
            Estimated costs are in the range of around $100 per ton of CO₂ removed, most of this coming from the energy needed to make the reagent i.e crushing minerals. 
            <br></br><br></br>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            For example, if alkalinity rises too much then this might promote a reversal of the equation at the beginning (as well as other similar biological carbonate formation). This is more of a dampening effect than a true issue but it does make the carbon accounting more difficult.
			</span> 

            One further issue, which is more of an accounting one than a scientific one, is that the actual rate of effectiveness of this approach is very hard to measure directly. This means that verification of CO₂ removed will likely have to rely heavily on modeled behavior, not so much a problem of the models are true to real life but a clear potential source of uncertainty.
            <br></br><br></br>
            These processes also, as mentioned, typically rely on some form of mineral to react with ocean CO₂. For this approach to actually remove CO₂ on net the process to create this mineral would have to produce less CO₂ than is removed in the oceans. 
            <br></br><br></br>
            From <a href="https://orca.cardiff.ac.uk/60899/1/2013%2520-%2520Renforth%2520etal%2520Ocean%2520Liming.pdf">Renforth et al</a>:

            </p>
            <blockquote>
				<p>
                Every tonne of CO2 sequestered requires between 1.4 and 1.7 tonnes of limestone to be crushed, calcined, and distributed. Approximately 1 tonne of CO2 would be created from this activity, of which &gt;80% is a high purity gas (pCO2 &gt;98%) amenable to geological storage.

				</p>
			</blockquote>
            <p>
            So the process creates as much CO₂ as it removes later on but this CO₂ is easy to store, at least in principle. This suggests that one of the limiting factors to how quickly OEA could scale up is not anything to do with the ocean part, but rather the speed at which we could build CCS enabled plants to create the materials we scatter over the ocean. 
            <br></br><br></br>
            Overall it looks like a very worthy area to be looking more into, especially around the actual effects on the ocean ecosystem, but that work on CCS also needs to be done in parallel to make the whole life cycle analysis balance out. 
            <br></br><br></br>
            <span style={{fontSize: 'medium', color: 'white'}}><Latex>{' $ ____________________________________________ $'}</Latex></span> 

            </p>


          </section>
          </article>
        </div>    
        <div class="footer">
        <p style={{fontSize: '5rem'}}><a href="../section_2/2.9">&#8678;</a> &nbsp; <a href="../section_2/2.11">&#8680;</a></p>
        </div> 


      </main>

    </div>
  )
}
