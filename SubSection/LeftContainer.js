import React from 'react'
import { Form } from 'react-router-dom'
import '../CSS/sectionSeven.css'
function LeftContainer() {
  return (
<>
    <div className='LeftParentContainer'>
    <div className={"sectionSevenFormContainer"}>
        <div className={"sectionSevenFormTitleContainer"}>
                <h1>Get in with Our Amazing team </h1>
                <h3 className={"sectionSevenFormParaContainer"}>
                     We would love to work with you, please fill out the form
                </h3>
        </div>
      <Form className={"form"}>
        <div className={"sectionSevenFormGroup"}>
            <label htmlFor='name'>Name</label>
            <input type='text' id="name" name="name" placeholder='Enter Name'/>
        </div>
        <div className={"sectionSevenFormGroup"}>
            <label htmlFor=''>Email</label>
            <input type='text' id="name" name="name" placeholder='Enter Email'/>
        </div>
        <div className={"sectionSevenFormGroup"}>
            <label htmlFor=''>Number</label>
            <input type='text' id="name" name="name" placeholder='Enter Number'/>
        </div>
        <div className={"sectionSevenFormGroupMessage"}>
            <label htmlFor=''>Message</label>
            <input type='text' id="message" className={"message"} name="name" placeholder='Enter Message'/>
        </div>
      </Form>

        <div className={"sectonSevenFormBottom"}>
            <div className={"sectionSevenBottomTop"}>
                <div className={"sectionSevenFormTitle"}>
                        <h4>What are you Looking for</h4>
                </div>
                <dv className={"sectionSeveRadioContainer"}>
                    <>
                    <input type='radio'></input> 
                    <label htmlFor='radio1'>Online Tutor</label>
                    </>
                    <>
                    <input type='radio'></input> 
                        <label htmlFor='radio2'>Nanny / Governess</label>
                    </><>
                    <input type='radio'></input> 
                        <label htmlFor='radio3'>Tutor in Person</label>
                    </>
                </dv>
            </div>
        </div>
<div className='buttonSend'></div>
        <button>Send</button>
    </div>
        </div>
</>
  )
}

export default LeftContainer