
import Header from '../Component/Header';
function LandingPage()
{

     const  login=()=>{

         

     }


     return(
        <>
        <Header />

        <div>
           <div style={{marginTop:"2rem", border:"2px solid #ccc", color:"black", textAlign:"center", padding:"3rem 2rem 2rem"}}>
               <h1>
                    <span style={{fontWeight:900}}>Intelligent Healthcare.</span><br /><br />
                    <span style={{fontWeight:700, fontSize:"2rem"}}>Automated Precision.</span>
               </h1>
               <p style={{fontWeight:600, fontSize:"1rem", marginTop:"1rem", lineHeight:"1.5"}}>
                    The next-generation Hospital and Clinic Management System designed for India. Unify your EMR, ICU Flowsheets, Pharmacy, and Billing into one seamless, data-driven command center.
               </p>
           </div>

           

           <div style={{marginTop:"2rem", textAlign:"center"}}>
                <button onClick={()=>login()} style={{padding:"0.9rem 1.75rem", borderRadius:"999px", border:"none", backgroundColor:"#0077cc", color:"white", fontWeight:700, cursor:"pointer", marginRight:"1rem"}}>
                    Request a Demo
                </button>
                <button style={{padding:"0.9rem 1.75rem", borderRadius:"999px", border:"none", backgroundColor:"#0077cc", color:"white", fontWeight:700, cursor:"pointer"}}>
                    Watch Overview
                </button>
           </div>
        </div>
        </>
     )
}

export default LandingPage;