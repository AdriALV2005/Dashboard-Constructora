"use client";

import React from 'react';
import  "./factura.module.css"


const Invoice = () => {
  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <h1>IVONNE</h1>
        <p>Invoice No: #SM75692</p>
      </div>
      <div className="invoice-must-read">
        <p>Must Read:</p>
        <p>Seating is on a first come, first served basis unless you have purchased a ticket for a Reserved Seating performance. Please arrive early for best seat section.</p>
      </div>
      <div className="invoice-details">
        <div className="university-info">
          <h2>IVONNE UNIVERSITY</h2>
          <p>237 Roanoke Road, North York,</p>
          <p>Ontario, Canada</p>
          <p>demo@email.com</p>
          <p>+1-613-555-0141</p>
        </div>
        <div className="service-details">
          <p>Date Of Services: 25 Feb 2022</p>
        </div>
        <div className="student-info">
          <p>Student ID: AS2534568</p>
          <p>Balance Due: $3600</p>
          <p>Student Name: Johan Smith</p>
          <p>Due Date: 25 Feb 2022</p>
          <p>Term: Winter</p>
          <p>Statement For: 2022 Spring</p>
        </div>
      </div>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Details</th>
            <th>Due Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Semester Fee</td>
            <td>25 Feb 2022</td>
            <td>$60</td>
          </tr>
          <tr>
            <td>Exam Fee</td>
            <td>25 Feb 2022</td>
            <td>$120</td>
          </tr>
          <tr>
            <td>Transport Fee</td>
            <td>25 Feb 2022</td>
            <td>$25</td>
          </tr>
          <tr>
            <td>Hostel Fee</td>
            <td>25 Feb 2022</td>
            <td>$30</td>
          </tr>
          <tr>
            <td>Book Fee</td>
            <td>25 Feb 2022</td>
            <td>$20</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total Amount:</td>
            <td>$273</td>
          </tr>
        </tfoot>
      </table>
      <div className="payment-info">
        <p>Pay By: Credit Card - 236***************</p>
        <p>Amount: $113 - Due: $0</p>
      </div>
      <div className="invoice-footer">
        <p>Note:</p>
        <p>Here we can write additional notes for the client to get a better understanding of this invoice.</p>
      </div>
      <div className="invoice-buttons">
        <button>Print</button>
        <button>Download</button>
      </div>
    </div>
  );
};

export default Invoice;
