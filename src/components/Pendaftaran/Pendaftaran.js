import React from 'react';
import './pendaftaran.css';

const Pendaftaran = () => {
    return (
        <div className='container-fluid pendaftaran-section' id='pendaftaran'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                        <div className='pendaftaran-title'>
                            <h5>Pendaftaran</h5>
                        </div>
                        <div className='pendaftaran-form'>
                            <input type='text' placeholder='Nama Lengkap' name='nama_pendaftar' />
                            <input type='text' placeholder='No WhatsApp' name='wa_pendaftar' />

                        </div>
                        <div className='pendaftaran-button'>
                            <p>Daftar</p>
                        </div>
                        
                    </div>
                </div>
            </div>                
        </div>
    )
}
export default Pendaftaran;