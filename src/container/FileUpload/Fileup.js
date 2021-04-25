import React from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';


class Fileup extends React.Component{
state={

    file:''
}
onChange(e) {
    this.setState({file:e.target.files});
}
render() {

    const handleFormSubmit = () => {
        const formData = new FormData();
        formData.append('files',this.state.file);
axios.post('http://localhost:5000/allup', formData, {
    headers:{
        'Content-Type': 'multipart/form-data'
    }
})

    }
   
axios.get('http://localhost:5000/allup')
.then(res => this.setState({img: res.data}))
.catch(err => console.log(err))


    return (

        <div>
     <Form
        onSubmit={handleFormSubmit} >
<Form.Group>
          <Form.Label>Choose photo to upload</Form.Label>
          <Form.Control type="file" name="files" onChange= {(e)=>this.onChange(e)}/>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Upload
        </Button>
      </Form>

            <img src ={'http://localhost:5000/allup'} alt="Minions"/>


            <h1> Upload files and Images</h1>
            <hr/>
            <h1> View files and Images</h1>
        </div>
    )
}

}

export default Fileup ;