import React from 'react'

const Payment = () => {
  return (
    <div className="container">
      <h2 className="payhead">ONLINE FEES PAYMENT</h2>

      <h4 stylE={{fontWeight: 'bold'}}>PAYMENT DETAILS</h4>
      <p>Payment is being made for : Student 12029990904 10/10/2022 Xaren Lawrence</p>
      <h6>PAY FOR :</h6>
       <div style={{display: 'flex' ,flexDirection:"row"}}>
          <input type="radio" name="gender" value="tution-fee"/>
           <p style={{marginRight:"1rem"}} >Tution Fees</p> 
          <input type="radio" name="gender" value="exam-fee"/>
          <p style={{marginRight:"1rem"}} > Exam Fee</p>
          <input type="radio" name="gender" value="backlog"/>
           <p>Backlog</p>
           </div>
          <br />

        <h6>CURRENCY (IN RUPEE) :</h6>
        <h6>Amount</h6> 
        <input type="number" />

        <h6>Card Number</h6> 
        <input type="number" />

        <h6>Telephone Contact</h6> 
        <input type="number" />
        <br /> <br />
      <div className="paybtn">
        <button class="btn btn-success">Continue</button>
        <button className="btn btn-danger"> Cancel</button>
        </div>
        <br /> <br />


    </div>
  )
}

export default Payment;