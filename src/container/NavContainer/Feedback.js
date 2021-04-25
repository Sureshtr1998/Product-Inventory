import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import './Home.css'
import { connect } from 'react-redux'
import * as Action from '../../store/Action'

import swal from 'sweetalert'
const Feedback = (props) => {



    useEffect(() => {
        const feedbk = props.feedinit;
        feedbk()

    }, [props.feedinit])

    const [setfeedback, updatedfeedback] = useState('')


    const subfeedback = (e) => {
        e.preventDefault();


        let feedback = {};

        feedback.comments = setfeedback;


        props.onFeedbackSubmit(feedback);
        swal("Submitted Successfully!", "Thanks for your feedback!!!", "success")
        props.history.push('/')

    }



    const viewfeedback = () => props.comments.map(comm => swal(comm.comments))

        
    



    return (
        
<div>  

        <Form onSubmit={(e) => subfeedback(e)} style={{ textAlign: 'center', paddingTop: '20px' }}>
            <hr />
            <Form.Label>How much you'd like to rate my code?</Form.Label>
            <p onClick={viewfeedback} style={{ position: 'absolute', display: 'inline', paddingLeft: '20%' }}> <u>Latest Feedback</u></p>
            <br />

          


            <fieldset required id="group1">
            <Form.Check inline label='1'  name='group1'  type="radio" />
            <Form.Check inline label='2' name='group1'  type="radio" />
            <Form.Check inline label='3'  name='group1' type="radio" />
            <Form.Check inline label='4'  name='group1' type="radio" />
            <Form.Check inline label='5'  name='group1' type="radio" />
            </fieldset>
            <hr />



            <Form.Label>How much you'd like to rate App UI/UX?</Form.Label>
            <br />

            <Form.Check inline label='1'  name='group2' type="radio" />
            <Form.Check inline label='2' name='group2'  type="radio" />
            <Form.Check inline label='3'  name='group2' type="radio" />
            <Form.Check inline label='4'  name='group2' type="radio" />
            <Form.Check inline label='5'  name='group2' type="radio" />

            <hr />





            <Form.Label>How much you'd like to rate overall of this Project?</Form.Label>
            <br />

            <Form.Check inline label='1'  name='group3' type="radio" />
            <Form.Check inline label='2'  name='group3' type="radio" />
            <Form.Check inline label='3'  name='group3' type="radio" />
            <Form.Check inline label='4' name='group3'  type="radio" />
            <Form.Check inline label='5'  name='group3' type="radio" />

            <hr />

            <Form.Label>Please enter overall comment for this project</Form.Label>
            <center><Form.Control style={{ width: '70%' }} type="text" value={setfeedback}
             onChange={e => updatedfeedback(e.target.value)} required
             minLength="5"
             /></center>

            <hr />
            <br />


            <Button variant="primary" type="submit">
                Submit
            </Button>
            <hr />
        </Form>
        </div>
    )
}


const mapstatetoprops = state => {
    return {
        comments: state.comments
    }
}


const mapdispatchtoprops = dispatch => {
    return {
        feedinit: () => dispatch(Action.feedinit()),
        onFeedbackSubmit: (data) => dispatch(Action.feedback(data))
    }
}




export default connect(mapstatetoprops, mapdispatchtoprops)(Feedback) 