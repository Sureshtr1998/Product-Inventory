import React from 'react'
import { Chart } from "react-google-charts";
import { connect } from 'react-redux'
import * as Action from '../../store/Action'
import { Form } from 'react-bootstrap'



class Graph extends React.Component {

  state = {

    val: 5
  }

  componentDidMount() {

    this.props.onInit();

    this.Values = [];
    this.Sorted = [
      ['ProductName', 'Views']

    ];

  }


  Sorted = [
    ['ProductName', 'Views']

  ]

  Values = [

  ]
  componentDidUpdate(prevprops, prevstate) {
    if (this.state.val !== prevstate.val) {

      this.Values = [];
      this.Sorted = [
        ['ProductName', 'Views']

      ];
      console.log("COMPONENT UPDATED" + this.state.val)

    }

  }




  render() {
    let sorted = [];
    let finalarray = [];


    this.props.products.map(element =>

      this.Values.push([element.Product_name, element.Count])
    )
    sorted = this.Values.sort((a, b) => b[1] - a[1])





    finalarray = sorted.slice(0, this.state.val)



    if (this.Values.length <= this.props.products.length) {

      this.Sorted.push(...finalarray)

    }

    else {



      this.props.history.push('/graph')



    }



    return (


      <div className="container">




        <div className="row py-0 mt-5 align-items-center">




          <Form.Label style={{ marginLeft: '90%' }} >Top Products</Form.Label>
          <Form.Control style={{ width: '8%', marginLeft: '90%' }} onChange={(e) => this.setState({ val: e.target.value })

          }
            as="select">
            <option value='5'>5</option>
            <option value='3'>3</option>

            <option value='10'>10</option>
            <option value='15'>15</option>
          </Form.Control>


          <div className="col-md-10 col-lg-12 align-items-left">





            <Chart
              width={'100%'}
              height={'475px'}
              chartType="Bar"
              loader={<div>Loading Chart</div>}

              data={this.Sorted}

              options={{
                // Material design options
                chart: {
                  title: 'Product Views'
                }
              }}

            />




          </div>

        </div>

      </div>



    )




  }


}


const mapstatetoprops = state => {

  return {

    products: state.products
  }
}
const mapdispatchtoprops = dispatch => {
  return {

    onInit: () => dispatch(Action.Product_det())
  }


}
export default connect(mapstatetoprops, mapdispatchtoprops)(Graph)