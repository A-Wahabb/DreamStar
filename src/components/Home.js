import React from "react";
import './home.css';
import { Carousel,Card } from 'antd'


const Home=()=>{
    return(
        <div className='home'>
           
           <div className='slider'>
           <Carousel  style={{width:'100%'}}  >
           <div>
           <img alt='DreamStarCoder' className='contentStyle' src={process.env.PUBLIC_URL+'/slideone.jpg'}/>
          </div>    
           <div>
           <img alt='UI&UX' className='contentStyle'src={process.env.PUBLIC_URL+'/ui.jpg'}/>
          </div>
          <div>
           <img alt='AppDevelopment' className='contentStyle'src={process.env.PUBLIC_URL+'/app.jpg'}/>
          </div>
          <div>
           <img alt='WebDevelopment' className='contentStyle'src={process.env.PUBLIC_URL+'/web.jpg'}/>
          </div>
  </Carousel>
           </div>
           <br/>
                         <div>
                        <h1 className='firstheading'>
                            welcome to the dreamStarCoder
                        </h1>
                          <h2 className='secondheading'>
                              we biuld digital solution
                          </h2>
                          <h3 className='hmainheading'>
                              softwere development
                          </h3>
                        </div>
                        <div className='home_content'>
                        <p>
                            dreamStarCoder software company are software development company focused on quality
                            and timely delivery of standard business applications, vertical market and bespoke customised
                            application from simple standaione softwere to development of software solution that 
                            gives a edge to your busniess. developin software with integratio to thir party accounting 
                                software. financial application and customer relationship management application. 
                                
                        </p>
                        <div className='readmorediv'>
                        <button className='readmorebtn'>Read more</button></div>
           </div>
           <div className='webmobAppdlp'>
                      <h2 className='webmobAppdlp_heading'>web&mobile Application development</h2>
                      <p className='webmobAppdlp_peragrf'>
                          in the era where interent and access to information is a pre-requisite.
                         web application are becoming a standard way of delivering solutions to 
                          provide timely information and methods of processing data using a range of
                          devices and platforms. web apps and mobile apps provide users the capability 
                          of processing information remotely while on the move over the internet,
                          intranet or mobile devices. 
                      </p>  
                      <div className='rdmdiv'>
                        <button className='rdmbtn'>read more</button></div>
           
       
           </div>
                                  {/* cards */}
                                  
            <div className='cardsdive'>
                <div>
                                        {/* card_one */}
                     <Card className='cardone'>
                         <h2 className='cardheading'>website design</h2>
                          <p className='cardperagraf'>Don't forget that first impressions are lasting ones. Make your 
                              presence on the Information Highway. The time is perfect to get your 
                              business online.
                               </p>
                               <div>
                               <img alt='WebDebelopment' className='cardimage'src={process.env.PUBLIC_URL+'/web.jpg'}/>
                               </div>
                               <div className='rdmdiv'>
                        <button className='rdmbtn'>read more</button></div>
                         </Card> 
                            </div>   
                                                  {/* card_two */}
                            <div className='cardtwodiv'>
                         <Card className='cardtwo'>
                         <h2 className='cardheading'>e commerece solution</h2>
                          <p className='cardperagraf'>
                              E-Commerce is a paramount to success of any organistion selling 
                              products and service.
                               </p>
                               <div className='cardimagediv'>
                               <img alt='WebDebelopment' className='cardimage'src={process.env.PUBLIC_URL+'/web.jpg'}/>
                               </div>
                               <div className='rdmdiv'>
                        <button className='rdmbtn'>read more</button></div>
                          </Card> 
                          </div>  
                                                       {/* card_three */}
                          <div className='cardthreediv'>   
                         <Card className='cardthree'>
                         <h2 className='cardheading'>multi media</h2>
                             <p className='cardperagraf'>
                                  A fine balanced mix of technology, structre, aesthetics of 
                                  a baby smile. The computer is an extension of mind.
                               </p>
                               <div className='cardimagedivthree'>
                               <img alt='WebDebelopment' className='cardimage'src={process.env.PUBLIC_URL+'/web.jpg'}/>
                               </div>
                               <div className='rdmdiv'>
                        <button className='rdmbtn'>read more</button></div>
                        </Card> 
                        </div>       
                          </div>
                         
                          
        </div>
    )
}
export default Home