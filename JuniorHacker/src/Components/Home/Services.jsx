import React, { Component } from 'react'
import './services.css'
class Services extends Component {
  render() {
      
    return (
      <section className='services'>
        <div className='container'>

           <div className='row'>
                <div className='section-title text-center'>
                <h1>Our Sevices</h1>
                </div>
           </div>

           <div className='row'>
               <div className='service-content'>
                    

                        <div className='box'>
                             <div className='icon'>
                             <i className='fa fa-home'></i>
                             </div>
                             <h5>Safe Home</h5>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint eos corrupti est magnam doloribus impedit recusandae debitis iusto? Accusantium inventore repudiandae.</p>
                        </div>
                        <div className='box'>
                             <div className='icon'>
                             <i className='fa fa-university'></i>
                             </div>
                             <h5>Education</h5>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint eos corrupti est magnam doloribus impedit recusandae debitis iusto?  Accusantium inventore repudiandae.</p>
                        </div>
                        <div className='box'>
                             <div className='icon'>
                             <i className='fa fa-medkit'></i>
                             </div>
                             <h5>Medical Eid</h5>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint eos corrupti est magnam doloribus impedit recusandae debitis iusto? Accusantium inventore repudiandae.</p>
                        </div>
                        <div className='box'>
                             <div className='icon'>
                             <i className='fa fa-apple'></i>
                             </div>
                             <h5>Sustainability</h5>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint eos corrupti est magnam doloribus impedit recusandae debitis iusto? Accusantium inventore repudiandae.</p>
                        </div>
                        <div className='box'>
                             <div className='icon'>
                             <i className='fa fa-search'></i>
                             </div>
                             <h5>Monitoring </h5>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint eos corrupti est magnam doloribus impedit recusandae debitis iusto? Accusantium inventore repudiandae.</p>
                        </div>
                        <div className='box'>
                             <div className='icon'>
                             <i className='fa fa-cog '></i>
                             </div>
                             <h5> Evaliuation</h5>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint eos corrupti est magnam doloribus impedit recusandae debitis iusto?  Accusantium inventore repudiandae.</p>
                        </div>

                      

                    
               </div>
           </div>
        </div>
        
      </section>
    )
  }
}

export default Services
