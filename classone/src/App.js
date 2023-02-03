import logo from './logo.svg';
import './App.css';

function App() {
  
    

  let teachers = [
        {
            name: "Miss Saima",
            age: "25",
            qualification: "M.A",
           salary: 40000 ,
            Institute: "Aga Khan School"
        },
        {
           name: "Miss Asma",
            age: "35",
            qualification: "M.phill",
           salary: 60000 ,
            Institute: "Usman public School"
        },
        {
           name: "Miss Sobia",
            age: "30",
            qualification: "B.com",
           salary: 50000 ,
            Institute: "Shahwilayat Public School"
        },
        {
           name: "Miss Sultana",
            age: "28",
            qualification: "M.A",
           salary: 70000 ,
            Institute: "The Seeds School"
        },
        {
           name: "Miss Bushra",
            age: "29",
            qualification: "B.a",
           salary: 30000 ,
            Institute: "The Educators School"
        },
        {
           name: "Miss Anum",
            age: "24",
            qualification: "M.ed",
           salary: 70000 ,
            Institute: "Habib Girls School"
        },
        {
           name: "Miss Noureen",
            age: "27",
            qualification: "Graduate",
           salary: 40000 ,
            Institute: "Mama Baby Care School"
        },
        {
           name: "Miss Fatima",
            age: "31",
            qualification: "B.sa",
           salary: 80000 ,
            Institute: "Meritorious School"
        },
        {
          name: "Miss Rehana",
            age: "32",
            qualification: "MBA",
           salary: 40000 ,
            Institute: "The City School"
        },
        {
         name: "Miss Humera",
            age: "26",
            qualification: "Bds",
           salary: 60000 ,
            Institute: "BVS School"
        },
        {
            name: "Miss Bashair",
            age: "30",
            qualification: "BBA",
           salary: 80000 ,
            Institute: "IU School"
        },
        {
           name: "Miss Fozia",
            age: "27",
            qualification: "F.sc",
           salary: 20000 ,
            Institute: "Intellect School"
        },
    ];
  return (
    <div className="App">
      <header className="App-header">
      <h3 className = "card">List Of Teachers</h3>
       {
        teachers.map((x,i)=>{
          return( 
          <div key={i} className="card">
        
           < h3>{x.name}</h3>
          <p>{x.qualification}</p>
          <p>  {x.Institute} </p>
          </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
