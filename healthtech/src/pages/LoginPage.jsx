import { useState } from 'react';

function Login() {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here, e.g., API call
        // console.log('Email:', email, 'Password:', password);

    };

    return (


        
        <div style={{ minHeight: '100vh', display: 'flex', border: '2px solid #4d2626', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ border: '2px solid #060505', borderRadius: '10px', height: '500px', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>


                <h2 style={{ marginTop: '-40px' }}>HCMS.Pro</h2>

                <h3 style={{ color: "black" }}>Secure Staff Portal</h3>

                <p style={{ color: "black", fontSize: "12px" }}>Enter your credentials to access the pospital network.</p>



                <form onSubmit={handleSubmit} style={{ width: '100%', padding: '0 20px', boxSizing: 'border-box' }}>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>STAFF ID / EMAIL</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='e.g DR-4492 or email@hospital.com' style={{ width: '100%', padding: '10px', marginTop: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '14px' }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#333' }}>PASSWORD</label>
                            <a href="#" style={{ fontSize: '12px', color: '#000000', textDecoration: 'none' }}>Forgot?</a>
                        </div>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='•••••••••' style={{ width: '100%', padding: '10px', marginTop: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '14px' }} />
                    </div>
                    <button
                        type="submit"
                        style={{ width: '100%', padding: '10px', marginTop: '20px', backgroundColor: '#000000', color: 'white', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                        Login
                    </button>
                    <br /><br />
                    <hr />
                    <br />
                    <button
                        type="button"
                        style={{ width: '100%', padding: '10px', marginTop: '20px', backgroundColor: '#000000', color: 'white', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                        Biometric Authentication
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Login;