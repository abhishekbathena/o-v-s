/*
function Result(props){

    const [count, setcount] = useState('');
    const [cand2, setcand2] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/reg/Result/1`).then((res) => {
    
        setcount(res.data.count)
          
          
      });
     
    
    
    },[]);


    
  useEffect(()=>{
    axios.get(`http://localhost:8000/reg/cand/1`).then((res) => {
    setcand2(res.data);
    
      console.log(res.data);
      
  });
 


},[]);

    


    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24];
var barColors = ["red", "green","blue","orange"];


new Chart("myChart", {
    type: "bar",
    data: {
      labels: cand2.map((value,key)=>{
          return value.name
      }),
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "World Wine Production 2018"
      }
    }
  });





    return(
        
        <div>



<canvas id="myChart" style={{width:'100%' ,maxWidth:'600px'}}></canvas>
<div><h1>{count}</h1></div>

        </div>
    );


}

export default Result;

*/
