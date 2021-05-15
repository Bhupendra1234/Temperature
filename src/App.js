import React from "react";
import { Chart } from "react-google-charts";



const Charte =()=> {


  const Highest =[
    ['Month' ,'Highest'],['Jan', 20],['Feb', 24 ],['Mar', 30 ],['Apr', 37],['May', 40], ['Jun', 39 ], ['Jul', 35], ['Aug', 34],
    ['Set', 34], ['Oct', 33],['Nov', 28],['Dec', 22], 
  ]
  const high_low =[
    ['Month' ,'high','low'],['Jan', 20,8],['Feb', 24 ,11], ['Mar', 30 ,16], ['Apr', 37, 23], ['May', 40,27],
    ['Jun', 39 ,28], ['Jul', 35, 28], ['Aug', 34, 27], ['Set', 34, 25], ['Oct', 33,21], ['Nov', 28,14], ['Dec', 22,9]
  ]
 const comp =[
  ['Month', 'Comparision of Delhi and Houston', 'Delhi_Low', 'Houston_High', 'Houston_Low'],
  ['Jan', 20,8 ,16,7], ['Feb', 24 ,11,18,19], ['Mar', 30 ,16,21,13], ['Apr', 37, 23,25,16],
  ['May', 40,27,28,20],  ['Jun', 39 ,28,31,23],['Jul', 35, 28,33,24],['Aug', 34, 27,30,22],
  ['Set', 34, 25,30,22],['Oct', 33,21,26,17],['Nov', 28,14,21,12], ['Dec', 22,9,17,9]
]

  const mystyle={
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width:'60%',
    textAlign:'center',
    fontFamily: "Montserrat sans-serif",
    
  }
return(
  <>
      <div style={mystyle}>
          <div style={{padding:'20px'}}>
              <h2>Delhi Temperature As Highest</h2>
                <Chart
                  width={'100%'}
                  height={350}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={Highest}
                  options={{
                    legend: 'none',
                  }}
                  rootProps={{ 'data-testid': '3' }}
                />
                </div>
            <div style={{padding:'20px'}}>
             <h2>High And Low Temperature Of Delhi</h2>
              <Chart
                  width={'100%'}
                  height={350}
                  chartType="Bar"
                  data={high_low}
                  options={{
                    legend: 'none',
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
                </div>
                <div style={{padding:'20px'}}>
                <h2>Comparision Of High And Low Temperature Of Delhi And Houston</h2>
                <Chart
                  width={'100%'}
                  height={350}
                  chartType="CandlestickChart"
                  data={comp}
                  options={{
                    legend: 'none',
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              </div>
       </div>
         </> 
        )
       


}
export default Charte

