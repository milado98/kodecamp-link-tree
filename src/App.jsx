import profile from './assets/profile.jpg';
import gitlogo from './assets/gitlogo.png';
import slack from './assets/slack.png';
import KodeCamp from './assets/kodecamplogo.png';
import KodeHauz from './assets/kodeHauzLogo.png';
import share from './assets/share.png';
import shareMobile from './assets/shareMobile.png'
import './App.css';
import './index.css';

const App = () => {
    return(
        <div className="main--container flex">
        <header className='profile--section'>
          <div className='profile-img-section'>
            <img src={profile} alt="profile Image" />
            <img src={share} alt="share" className='share'/>
            <img src={shareMobile} alt="share" className='share-mobile'/>
          </div>
          <h2>Big Paappi</h2>
        </header>
        <main>
          <section className='main--section flex'>
            <a href="https://twitter.com/BPaapi" className='link__btn'>Twitter Link</a>
            <a href="#" className='link__btn'>KodeCamp Team</a>
            <a href="#" className='link__btn'>KodeCamp Books</a>
            <a href="#" className='link__btn'>Python Books</a>
            <a href="#" className='link__btn'>Background Check for coders</a>
            <a href="#" className='link__btn'>Design Books</a>
          </section>

          <section className='socials--section flex'>
            <a href="#">
              <img src={slack} alt="slack" />
            </a>
            <a href="https://github.com/milado98">
              <img src={gitlogo} alt="github" />
            </a>
          </section>
          <footer className="footer">
            <img src={KodeCamp} alt="KodeCamp Logo" />
            <p>KodeCamp Internship Task</p>
            <img src={KodeHauz} alt="KodeHauz Logo" />
        </footer>
        </main>
    </div>

    )
}

export default App
