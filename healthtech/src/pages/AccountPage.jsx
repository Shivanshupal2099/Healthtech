function AccountPage() {
    return(
        <>
            <div style={{ minHeight: '100vh', display: 'flex', border: '2px solid #4d2626',flexDirection:"row"}}>
                <div style={{ border: '2px solid #060505', borderRadius: '10px', height: '100vh', width: '300px' ,margin:"20px"}}> 

                    <div style={{display:"flex" ,color:"black", flexDirection:"column", marginLeft:"45px",marginTop:"30px"}}>
                           <div align="left" >
                                <h5>Personal Profile</h5>
                           </div>
                           <div align="left" >
                                <h5>Security & Access</h5>
                           </div>
                           <div align="left" >
                              
                               <h5>Notification</h5>

                           </div >
                           <div align="left" >
                                  <h5>Preference</h5>
                           </div>
                           <div align="left" >
                              <h5>Credentials & CME</h5>
                           </div>
                    </div>

                </div>
                <div style={{border:"1px solid grey ",borderRadius:"10px" ,height:"100vh",width:"100%" ,margin:"20px"}}>
                           <div align="left " style={{marginLeft:"60px",marginTop:"35px"}} >
                             <h2  >Personal Profile</h2>
                             <br></br>
                                <p >Manage your personal information ,contact detail and professional credentials</p>
                           </div>


                            <div style={{border:"2px solid black", borderRadius:"10px",width:"90%",height:"120px" ,margin:"29px"}}>

                              <div style={{display:"flex",flexDirection:"row"}}>
                                   <div style={{border:"1px solid black",height:"80px",width:"80px",margin:"20px",borderRadius:"50px"}}>
                                         
                                   </div>
                                    <div style={{color:"black"}}>
                                              <div align="LEFT" style={{marginTop:"15px"}}><b>SHIAVNSHU PAL</b></div>
                                               <div> <span>Chief Intensive Care Unit</span></div>
                                               <div style={{display:"flex",flexDirection:"row"}}>
                                                  <button style={{backgroundColor:"black",color:"white",border:"none",padding:"5px 10px",borderRadius:"5px",marginTop:"10px"}}>Edit Profile</button>


                                                  <button style={{backgroundColor:"red",marginLeft:"10px",color:"white",border:"none",padding:"5px 10px",borderRadius:"5px",marginTop:"10px"}}>Delete Account</button>
                                               </div>

                                              

                                    </div>
                            </div>

                            <div style={{border:"2px solid black",paddingLeft:"20px", borderRadius:"10px",width:"100%",height:"220px" ,marginLeft:"0px",marginTop:"19px"}}>
                                 
                                 <h3 align="left" style={{color:"black"}}>Basic Information</h3>
                                 <hr />


                                 <div style={{display:"flex",flexDirection:"row" ,color:"black"}}> 
                                     
                                        <div style={{display:"flex",flexDirection:"column" , marginRight:"50px"}}>
                                            <label align="left" htmlFor=""><b>FIRST NAME</b></label>
                                            <input type="text" />
                                        </div>
                                        <div style={{display:"flex" ,flexDirection:"column"}}>
                                             <label align="left" htmlFor=""><b>LAST NAME</b></label>
                                            <input type="text" placeholder="LAST NAME"/>
                                        </div>

                                      
                                 </div>
                                 <div style={{display:"flex",flexDirection:"row" ,color:"black" }}>
                                     
                                        <div style={{display:"flex",flexDirection:"column" , marginRight:"50px"}}>
                                            <label align="left" htmlFor=""><b>EMAIL ID :</b></label>
                                            <input type="text" />
                                        </div>
                                        <div style={{display:"flex" ,flexDirection:"column"}}>
                                             <label align="left" htmlFor=""><b>Password</b></label>
                                            <input type="password" placeholder="********" />
                                        </div>

                                      
                                 </div>



                            </div>
                                
                           </div>
                </div>
            </div>
        </>
    );
}

export default AccountPage;