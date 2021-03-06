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
            <h1 >Climate technology primer: CO2 removal</h1>
              
            <p>
            
            
                This is the second of a series of three blog posts intended as a primer on how technology can help to address climate change. 
                In the <a href="https://longitudinal.blog/co2-series-part-1-review-of-basics/">last post</a>
                , I covered some basics about climate and renewable energy. This post is a summary of what I learned about 
                carbon dioxide removal technologies.        
                <br></br>   
                <span style={{fontSize: 'small'}}><Latex>{'$(~1 \\,atm) *\\dfrac{P_x* 400}{1e6 \\,ppm} = 0.0004 \\,atm$'}</Latex></span> 
                

                <label htmlFor="mn-demo" className="margin-toggle">&#8853;</label>
                <input type="checkbox" id="mn-demo" className="margin-toggle"/>
                <span className="marginnote" id="growth base rates">  
                    For a bit of scale: 
                    <br></br>
                    - The USA's emissions in 2019 were  tonnes.
                    <br></br>
                    - China's 2019 emissions were  tonnes.
                    <br></br>
                    - Worldwide 2019 CO₂ emissions from coal were  tonnes.
                </span> 

                <span className="marginnote-reactive" id="co2removalScaleUp">
                  woop hideable marginnote
                </span> 

                <br></br><br></br>
                click <b onClick={()=>sidebar('co2removalScaleUp')} style={{cursor: 'pointer'}}>here</b> to open sidenote.
            
                <Collapsible trigger="Start here">
                <p>
                  This is the collapsible content. It can be any element or React
                  component you like.
                </p>
               </Collapsible>

            </p>

            <blockquote>
                <p>If we want to achieve a 90 percent probability of success, we must 
                    take into account historical rates of success from publicly available data; doing that suggests that we need to actively 
                    pursue not two or three vaccine candidates, but 15 to 20.
                </p>
                <footer><a href="https://www.nytimes.com/2020/05/04/opinion/coronavirus-vaccine.html">Christopher Snyder and 
                    Alex Tabarrok on spreading out investments for a solution to covid 19</a></footer>
            </blockquote>


          
          </section>
          </article>
        </div>    

      </main>

    </div>
  )
}
