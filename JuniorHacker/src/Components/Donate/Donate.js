import React, { useState } from "react";
import Navigation from "../Common/Navigation/Navigation"
import Footer from "../Common/Footer/Footer"
import "./styles.css";
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
          currency: "AUD",
          value: item.amount
        }
      }
    ],
    total: {
      label: "Total",
      amount: {
        currency: "AUD",
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
    <React.Fragment>      <Navigation/>
    <div className="Donate">
      <h1>Rondo The Hairdresser's store</h1>
      <div>
        <h2>Items for sale</h2>
        <ul className="items">
          {items.map((item, index) => (
            <li>
              <p className="items__label">{item.label}</p>
              <span>${item.amount}</span>
              <button
                className="items__button"
                onClick={() => buyItem(item)}
                type="button">
                Click to donate
              </button>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
    <Footer/>

    </React.Fragment>

  );
}


export default Donate;