import React,{useContext} from 'react'
import Ethereum from './Ethereum'
import './Home.scss'
import TextField from '@mui/material/TextField';
import { Button,Grid,Box } from '@mui/material';
import {TransactionsContext} from '../Context/TransactionContext'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {
  const {connectWallet,currentAccount,setFormData,formData,handleChange,sendTransaction} = useContext(TransactionsContext)

  const handleSubmit=(e)=>{
    const {addressTo,amount,keyword,message} = formData;

    e.preventDefault();
    if(!addressTo || !amount || !keyword || !message) return ;
    sendTransaction();
    // setFormData({addressTo:'',amount:'',keyword:'',message:''})
  }

  const Input =({placeholder,name,type,value,handleChange})=>(
    <TextField 
    label={placeholder}
    type={type}
    fullWidth
    variant = 'outlined'
    value={value}
    onChange={(e)=>handleChange(e,name)}
    />
  )


  return (
    <div>
<header className="header">
  <div className="container">
    <nav className="nav">
      <div className="nav-logo">
        <a className="nav-logo__link" title="logo">CRYPTO APP</a>
      </div>
      <div className="nav-menu">
        <ul className="nav-menu__item">
          <li><a href="#" className="nav-menu__link">Home</a></li>
          <li><a href="#" className="nav-menu__link">About</a></li>
          <li><a href="#" className="nav-menu__link">Service</a></li>
          <li><a href="#" className="nav-menu__link">Contact</a></li>
        </ul>
      </div>
    </nav>
    <div className="hero">
      <div className="hero-text">
        <h1 className="hero-text__main">Send Crpto Across the World</h1>
        <p className="hero-text__subs">Explore the crypto world buy and sell <br/>cryotocurrencies easily on Crypto App</p>
        <Grid container style={{width:"400px"}}>
          <Grid item xs={4} style={{height:"70px",border:'2px solid black',textAlign:"center",paddingTop:"5%", borderRadius:"20px 0px 0px 0px",backgroundColor:"white"}}>
            <h4>Reliabilty</h4>
          </Grid>
          <Grid item xs={4} style={{height:"70px",border:'2px solid black',textAlign:"center",paddingTop:"5%"}}>
            <h4>BlockChain</h4>
          </Grid>
          <Grid item xs={4} style={{height:"70px",border:'2px solid black',textAlign:"center",paddingTop:"5%",borderRadius:"0px 20px 0px 0px"}}>
            <h4>Web 3.0</h4>
          </Grid>
          <Grid item xs={4} style={{height:"70px",border:'2px solid black',textAlign:"center",paddingTop:"5%",borderRadius:"0px 0px 0px 20px"}}>
            <h4>Ethereum</h4>
          </Grid>
          <Grid item xs={4} style={{height:"70px",border:'2px solid black',textAlign:"center",paddingTop:"5%"}}>
            <h4>Low Fees</h4>
          </Grid>
          <Grid item xs={4} style={{height:"70px",border:'2px solid black',textAlign:"center",paddingTop:"5%",borderRadius:"0px 0px 20px 0px"}}>
            <h4>Security</h4>
          </Grid>
        </Grid>
        {!currentAccount &&  <Button style={{marginTop:"2%"}} variant='contained' onClick={connectWallet} >Connect Wallet</Button> }
       
      </div>
      <Box className="hero-image" style={{opacity:"2"}}>
        <div style={{display:"flex",marginTop:"-20%",marginLeft:"10%"}}>
       <Ethereum/>
       <h1 style={{marginTop:"0%",marginLeft:"10%",fontWeight:"900"}}>Ethereum</h1>
       </div>
       <div style={{color:"black",marginTop:"10%",marginLeft:"10%",width:"350px",opacity:"100"}}>
         <h3 style={{margin:"2% 0%",textAlign:"center"}}>Send Ethereum</h3>
   <Input placeholder='Address To' value={formData.addressTo}  name='addressTo' type='text' handleChange={handleChange} />
   <Input placeholder='Amount' name='amount' value={formData.amount} type='number' handleChange={handleChange} />
   <Input placeholder='Keyword' name='keyword' value={formData.keyword} type='text' handleChange={handleChange} />
   <Input placeholder='Message' name='message' value={formData.message} type='text' handleChange={handleChange} />
   <Button  variant="contained" fullWidth onClick={handleSubmit}>Submit</Button>
</div>
      </Box>
    </div>
  </div>
</header>

<main className="main">
  <section className="about">
    <div className="container">
      <div className="about-image">
        <img className="about-image__main" src="https://bit.ly/2D7MxjT" alt="Images"/>
      </div>
      <div className="about-text">
        <h1 className="about-text__main">Recent Transaction.</h1>
        <div className="about-text__subs">
          {currentAccount?
            <Carousel showThumbs={false} showStatus={false}>
            <div><h1>Hello1</h1></div>
            <div><h1>Hello2</h1></div>
            <div><h1>Hello3</h1></div>
          </Carousel>:<></>
        }
          
        </div>
      </div>
    </div>
  </section>
  <section className="service">
    <div className="container">
      <div className="card card-1">
        <div className="card-image">
          <img src="https://bit.ly/37hmX9N" alt="Images"/>
        </div>
        <div className="card-text">
          <h2 className="card-text__title">Best Exchange rates.</h2>
          <p className="card-text__subs">Security is guranteed .We always maintain privacy and maintain the quality of our products.
          </p>
        </div>
      </div>
      <div className="card card-2">
        <div className="card-image">
          <img src="https://bit.ly/2Xx6MAH" alt="Images"/>
        </div>
        <div className="card-text">
          <h2 className="card-text__title">Security</h2>
          <p className="card-text__subs">Security is guranteed .We always maintain privacy and maintain the quality of our products.</p>
        </div>
      </div>
      <div className="card card-3">
        <div className="card-image">
          <img src="https://bit.ly/2O0Ftf9" alt="Images"/>
        </div>
        <div className="card-text">
          <h2 className="card-text__title">Fastest Transaction</h2>
          <p className="card-text__subs">Security is guranteed .We always maintain privacy and maintain the quality of our products.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="contact">
    <div className="container">
      <div className="contact-image">
        <img src="https://bit.ly/32Y3o34" alt="Images"/>
      </div>
      <div className="contact-form">
        <h2 className="contact-title">Contact Us Now.</h2>
        <form className="form">
          <div className="form-group group-1">
            <input type="text" name="name" className="form-input" placeholder="Input Your Name"/>
          </div>
          <div className="form-group group-2">
            <input type="text" name="email" className="form-input" placeholder="Input Your Email"/>
          </div>
          <div className="form-group group-3">
            <textarea name="message" rows="5" className="form-textarea" placeholder="Input Your Messages"></textarea>
          </div>
          <div className="form-group group-4">
            <input type="submit" className="form-submit" value="Submit"/>
          </div>
        </form>
      </div>
    </div>
  </section>
</main>
<footer className="footer">
  <div className="container">
    <div className="footer-menu">
      <ul className="footer-menu__item">
        <li><a href="#" className="footer-menu__link">Home</a></li>
        <li><a href="#" className="footer-menu__link">About</a></li>
        <li><a href="#" className="footer-menu__link">Service</a></li>
        <li><a href="#" className="footer-menu__link">Contact</a></li>
      </ul>
    </div>
    <div className="footer-copy">
      <p>&copy; Copyright 2019 - All Right Reserved</p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Home
