
import React,{useEffect,useState} from 'react'; 
import axios from 'axios'; 
import { Link } from 'react-router-dom';
 export default function Dashboard()
 { const [drills,setDrills]=useState([]); 
    useEffect(()=>{ 
        axios.get((process.env.REACT_APP_API_URL||'http://localhost:5000')+'/api/drills')
        .then(r=>setDrills(r.data)).catch(()=>{}); },[]); 
        return (
        <div>
            <h2>Drills</h2>
            <ul>
                {drills.map(d=>
                <li key={d._id}>
                     <Link to={'/drill/'+d._id}>{d.title}</Link> - {d.difficulty}
                </li>)}
            </ul>
        </div>); }
