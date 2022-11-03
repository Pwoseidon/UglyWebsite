import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import NavigationLinks from '../components/navigation-links'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Soft UI Pro</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="home-hero"></div>
      <section className="home-testimonials">
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <div className="home-banner">
        <h1 className="home-text">UGLY: Counterculture Art Movement</h1>
        <span className="home-text01">
          <span className="home-text02">UGLY is a </span>
          <span className="home-text03">Blockchain Agnostic</span>
          <span className="home-text04">
            {' '}
            web3 art movement
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="home-text05"></br>
          <span className="home-text06">
            for creating and appreciating &quot;ugly&quot; art.
          </span>
          <br className="home-text07"></br>
          <br className="home-text08"></br>
          <span className="home-text09">
            We explore the concept of &quot;ugly&quot;
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="home-text10"></br>
          <span className="home-text11">
            as a socio-neurological phenomenon.
          </span>
          <br className="home-text12"></br>
          <br className="home-text13"></br>
          <span className="home-text14">
            Through blockchain technology we celebrate
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="home-text15"></br>
          <span className="home-text16">the good, the bad and the ugly.</span>
          <br className="home-text17"></br>
          <br className="home-text18"></br>
          <span className="home-text19">Note</span>
          <span className="home-text20">
            : This is a meme project purely for enjoyment.
          </span>
          <br className="home-text21"></br>
          <span className="home-text22">
            It is by no means an investment or anything of value.
          </span>
          <br></br>
        </span>
        <div className="home-btn-group">
          <a
            href="https://mirror.xyz/pwoseidon.eth/Hhnpg3oCbKJt63Y5IDbWrUJBWsTubZBfstY9sg_ETGs"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link button"
          >
            Learn More
          </a>
        </div>
      </div>
      <header data-role="Header" className="home-header">
        <img
          alt="logo"
          src="https://izfewn62mwbrasm5ju4i53ekq374jdrn5nwhoc4xbbmxw47pd7ca.arweave.net/RkpLN9plgxBJnU04juyKhv_Eji3rbHcLlwhZe3PvH8Q"
          className="home-image1"
        />
        <div className="home-nav">
          <NavigationLinks rootClassName="rootClassName15"></NavigationLinks>
        </div>
        <div className="home-icon-group">
          <a
            href="https://twitter.com/Pwoseidonn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
        </div>
        <div data-type="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className="home-mobile-menu">
          <div className="home-nav1">
            <div className="home-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image2"
              />
              <div
                data-type="CloseMobileMenu"
                className="home-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName16"></NavigationLinks>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon06">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon10">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-testimonial">
        <img
          alt="image"
          src="https://zxjercmdpn2zldz3merbr6eebgfofha5xlq6w5jmxn4ivvfd4j2q.arweave.net/zdJIiYN7dZWPO2EiGPiECYrinB264et1LLt4itSj4nU"
          className="home-image3"
        />
        <span className="home-text24">Pwoseidon.eth (Founder)</span>
        <div className="home-testimonial1">
          <div className="home-container2">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon12">
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <span className="home-text25">
            <span>
              Pwoseidon is a web3 musician who struggled to draw his whole life,
              even failing Grade 8 Art class. Having had enough, he took a
              different approach -- &quot;if I can&apos;t draw beautiful things,
              I&apos;ll draw the ugliest things possible&quot;.
            </span>
            <br></br>
            <br></br>
            <span>
              Thus was born Ugly: Counterculture Art Movement to encourage all
              people to draw, regardless of skill. However, UGLY specifically
              encourages people to create intentionally hideous art -- thing
              that make you burst out laughing.
            </span>
            <br></br>
            <br></br>
            <span>
              Laughing at your own weaknesses is the best form of therapy! (Not
              medical advice -- please seek professional help!)
            </span>
            <br></br>
          </span>
          <div className="home-container3">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="home-hero1">
        <div className="home-container4">
          <h1 className="home-text34">$UGLY</h1>
          <span className="home-text35">
            <br></br>
            <span>The $UGLY token is a &apos;</span>
            <span className="home-text38">meme coin</span>
            <span>&apos; with no intrinsic value.</span>
            <br></br>
            <br></br>
            <span className="home-text42">Total supply:</span>
            <span> 7,777,777</span>
            <br></br>
            <br></br>
            <span className="home-text46">There is no $UGLY token sale.</span>
            <br className="home-text47"></br>
            <span className="home-text48">
              There&apos;s
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text49">no way</span>
            <span className="home-text50">
              {' '}
              to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text51">earn</span>
            <span className="home-text52"> $UGLY.</span>
            <br className="home-text53"></br>
            <br className="home-text54"></br>
            <span>$UGLY will only be given away.</span>
            <br></br>
            <br></br>
            <span className="home-text58">
              $UGLY will be bridged to ETH L2&apos;s
            </span>
            <br className="home-text59"></br>
            <span className="home-text60">and other chains, </span>
            <span className="home-text61">in line with our </span>
            <br className="home-text62"></br>
            <span className="home-text63">Omnichain</span>
            <span className="home-text64"> philosophy.</span>
          </span>
          <a
            href="https://etherscan.io/token/0xAD91447b210da8cfbbee467129Ad10664726eA9f"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link2 button"
          >
            Contract
          </a>
        </div>
        <img
          alt="image"
          src="https://izfewn62mwbrasm5ju4i53ekq374jdrn5nwhoc4xbbmxw47pd7ca.arweave.net/RkpLN9plgxBJnU04juyKhv_Eji3rbHcLlwhZe3PvH8Q"
          className="home-image4"
        />
        <ul className="list">
          <li className="home-li list-item">
            <a
              href="https://memecake.io/collection/kipugly"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3"
            >
              Kip: Ugly NFT
            </a>
          </li>
          <a
            href="https://mirror.xyz/pwoseidon.eth/Hhnpg3oCbKJt63Y5IDbWrUJBWsTubZBfstY9sg_ETGs"
            target="_blank"
            rel="noreferrer noopener"
          >
            <li className="home-li1 list-item">
              <span>Ugly Mirror Article</span>
            </li>
          </a>
          <li className="home-li2 list-item">
            <span className="home-text66">Seven Frogly Sins</span>
          </li>
        </ul>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
