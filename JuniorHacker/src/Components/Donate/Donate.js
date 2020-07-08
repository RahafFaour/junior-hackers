import React, { useState } from "react";
import Navigation from "../Common/Navigation/Navigation"
import Footer from "../Common/Footer/Footer"
import "./styles.css";
import {Media,Container, Col,Row} from 'react-bootstrap'
import imageDon from './imageDon.jpg'
import imageDona from './imageDona.jpg'
import Artikel from './Artikel.pdf'
import { Button } from 'semantic-ui-react'



const storeItems = [
  {
    id: "order-1",
    label: "Donate",
    amount: 50
  },
  // {
  //   id: "order-2",
  //   label: "Conditioner",
  //   amount: 15
  // },
  // {
  //   id: "order-3",
  //   label: "Hair Wax",
  //   amount: 7
  // }
];

const options = {
  requestPayerName: true,
  requestPayerEmail: true,
  requestPayerPhone: true
};

function buildShoppingCart(item) {
  return {
    id: item.id,
    displayItems: [
      {
        label: item.label,
        amount: {
          currency: "EUR",
          value: item.amount
        }
      }
    ],
    total: {
      label: "Total",
      amount: {
        currency: "EUR",
        value: item.amount
      }
    }
  };
}

async function buyItem(item) {
  const paymentMethods = [
    {
      supportedMethods: "basic-card",
      data: {
        supportedNetworks: ["visa", "mastercard"],
        supportedTypes: ["debit", "credit"]
      }
    }
  ];
  try {
    const paymentObject = buildShoppingCart(item);
    const payment = new PaymentRequest(paymentMethods, paymentObject, options);
    // Show the UI
    const paymentUi = await payment.show();
    // If payment is successful run here.
    await paymentUi.complete("success");
  } catch (e) {
    console.log("e", e);
    return;
  }
}

function Donate() {

  const [items] = useState(storeItems);
  
  return (
    <React.Fragment>

    <Container>
      <Navigation/>
      <br/><br/>
  <Row>
    <Col xs={6} md={6}>
    <React.Fragment>  
          
    <div className="Donate" border="success" style={{ width: '38rem', marginLeft: '0' }}>
      <br></br>
      <h1>U heeft dit werk met uw bijdrage aan Yoreem mede mogelijk gemaakt. Namens alle betrokkenen zeggen wij u daarvoor </h1>
      <div>
        <h2>heel hartelijk dank!</h2>
        <ul className="items">
          {items.map((item, index) => (
            <li>
              <p className="items__label">{item.label}</p>
              <span>€{item.amount}</span><br></br>
              <Button 
                className="ui green button"
                id="items__button"
                onClick={() => buyItem(item)}
                type="button">
                Click to donate
              </Button>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  

    </React.Fragment>
    </Col>
    <Col xs={12} md={6}>
              <Media>
          <img
            width={64}
            height={64}
            className="align-self-start mr-3"
            src={imageDona}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 style={{fontFamily:'Roman', color:'black', fontWeight: 'bold'}}>Mevrouw Sonia Puma (38)</h5>
            <p style={{fontFamily:'Roman'}}>
            heeft een handicap, ze loopt al vijf jaar met een
                rollator. In 2015 bood een NGO uit Cusco aan om haar te helpen met een
                heupoperatie. Helaas ging de operatie mis, waardoor haar rechterbeen
                onbruikbaar werd.
                <a href={Artikel} className="ui positive button" rel="noopener noreferrer" target="_blank"
             style={{fontFamily:'Roman', backgroundColor:'white', fontWeight: 'bold', color:'black'}}>More...</a>
            </p>

          </Media.Body>
          </Media>

          <Media>
          <img
            width={64}
            height={64}
            className="align-self-center mr-3"
            src={imageDon}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 style={{fontFamily:'Roman', color:'black', fontWeight: 'bold'}}>Mevrouw Verónica Ccana (45)</h5>
            <p style={{fontFamily:'Roman'}}>
            en mevrouwLorenza Choquetocro(39) zijn buren. Zewonen allebei indezelfde str aat. Beidevrouwen zijn
                      alleenstaande moeders. De eerste moeder woont samen met haar negenjarige dochter en de tweede moeder woont met
                      haar drie kinder 
                      <a href={Artikel} className="ui positive button" rel="noopener noreferrer" target="_blank"
             style={{fontFamily:'Roman', backgroundColor:'white', fontWeight: 'bold', color:'black'}}>More...</a>
            </p>

         
          </Media.Body>
          </Media>
            <br/><br/>

     </Col>
     </Row>
    </Container>

    <Footer/>

</React.Fragment>
    

  );
}


export default Donate;


