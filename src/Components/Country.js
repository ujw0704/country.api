import React ,{useEffect, useState}from 'react'
//  import axios from "axios"
// function Country() {

//     const [country, setCountry] = useState([])
//     const [state, setState] =useState([])
//     const [cities,setcities] =useState([])
//     const[selectecountry, setselectecountry]=useState(" ")
//     const [selectstate, setselecteState]=useState(" ")
//     const [selectecity, selectedCity] =useState(" ")
    


      
//     let mykey = "TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=="

//     var headers = new Headers();
//     headers.append("X-CSCAPI-KEY", mykey);
    
//     var countr = {
//      method: 'GET',
//      headers: headers,
//      redirect: 'follow'
//     };
//      useEffect(()=>{

//          fetch("https://api.countrystatecity.in/v1/countries", countr)
//          .then(response => response.json())
//          .then(result => {
             
//              console.log(result)
//              setCountry(result)
//             })
            
//             .catch(error => console.log('error', error));
            
//         },[])
//         let mystate  ="TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=="
       
//         var headers = new Headers();
//         headers.append("X-CSCAPI-KEY", mykey);
        
//         var states = {
//         method: 'GET',
//         headers: headers,
//         redirect: 'follow'
//         };
//          useEffect(()=>{

//              fetch(`https://api.countrystatecity.in/v1/countries/${selectstate}/states`, states)
//              .then(response => response.json())
//              .then(result => {
//                 setState(result.data)
//                  console.log(result)
                 
//                 })
//                 .catch(error => console.log('error', error));
           
//         },[selectedcountry])
         

//         let citykey ="TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=="
//         var headers = new Headers();
//         headers.append("X-CSCAPI-KEY", citykey);
        
//         var city = {
//          method: 'GET',
//          headers: headers,
//          redirect: 'follow'
//         };
        
//         useEffect(()=>{
          
//           fetch(`https://api.countrystatecity.in/v1/countries/${selectstate}/states/${selectecity}/cities`, city)
//           .then(response => response.json())
//           .then(result => {
//             setcities(result.data)
//             console.log(result)
//           })
//           .catch(error => console.log('error', error));
          
          
//         },[selectedState])
        
//   return (
//     <>
//        <select onChange={e=>setselectecountry(e.target.value)}>
//         <option selected disabled>country</option>

//        {
//            country.map((countries,index)=>{
               
//           return <option key={index}value={countries.iso2}>{countries.name}</option>

//         })
//        }
//        </select >

//        <select onChange={(e=>setselecteState(e.target.value))}>
//          <option selected disabled>State</option>
//         {

//           state.map((states,index)=>{
//             return <option key={index}value={states.iso2}>{states.name}</option>

//           })
//         } 
//        </select>
      
//     <select onChange={(e=> selectedCity(e.target.value))}> 
//         <option selected disabled>cities</option>
//          {
//         cities.map((city,index)=>{
//             return <option key={index}value={city.iso2}>{city.name}</option>

//           })
//         } 

//     </select>

    
//     </>
//   )
//   }






function Country() {
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const myKey = 'TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA==';

  const countryHeaders = new Headers();
  countryHeaders.append('X-CSCAPI-KEY', myKey);

  const stateHeaders = new Headers();
  stateHeaders.append('X-CSCAPI-KEY', myKey);

  const cityHeaders = new Headers();
  cityHeaders.append('X-CSCAPI-KEY', myKey);

  useEffect(() => {
    fetch('https://api.countrystatecity.in/v1/countries', {
      method: 'GET',
      headers: countryHeaders,
      redirect: 'follow',
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setCountry(result);
      })
      .catch(error => console.log('error', error));
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`, {
        method: 'GET',
        headers: stateHeaders,
        redirect: 'follow',
      })
        .then(response => response.json())
        .then(result => {
          // console.log(result);
          setState(result);
        })
        .catch(error => console.log('error', error));
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${selectedState}/cities`, {
        method: 'GET',
        headers: cityHeaders,
        redirect: 'follow',
      })
        .then(response => response.json())
        .then(result => {
          setCities(result);
          console.log(result);
        })
        .catch(error => console.log('error', error));
    }
  }, [selectedState]);

  return (
    <>
      <select onChange={e => setSelectedCountry(e.target.value)}>
        <option selected disabled>
          Country
        </option>
        {country.map((countries, index) => {
          return (
            <option key={index} value={countries.iso2}>
              {countries.name}
            </option>
          );
        })}
      </select>

      <select onChange={e => setSelectedState(e.target.value)}>
        <option selected disabled>
          State
        </option>
        {state.map((states, index) => {
          return (
            <option key={index} value={states.iso2}>
              {states.name}
            </option>
          );
        })}
      </select>

      <select onChange={e => setSelectedCity(e.target.value)}>
        <option selected disabled>
          Cities
        </option>
        {cities.map((city, index) => {
          return (
            <option key={index} value={city.iso2}>
              {city.name}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Country;
