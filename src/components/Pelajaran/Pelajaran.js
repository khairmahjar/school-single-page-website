import React from 'react';
import './pelajaran.css';
import { FcOk} from "react-icons/fc";

const Pelajaran = () => {
    const pelajaran_data = [
        {
        nama: 'Al-Quran dan Tafsir',
        materi: ['Qiraah', 'Hifzul Quran', 'Tafsir', 'Tajwid']
        },
        {
        nama: 'Fiqih',
        materi: ['Ibadah', 'Muamalah', 'Nikah', 'Waris']
        },
        {
        nama: 'Hadis',
        materi: ['Ilmu Hadis', 'Sanad', 'Matan', 'Ilmu Rijal']
        },
        {
        nama: 'Akidah',
        materi: ['Tauhid', 'Sifat Allah', 'Nubuwwah', 'Maad']
        },
        {
        nama: 'Bahasa Arab',
        materi: ['Nahwu', 'Sharaf', 'Qawaid', 'Balaghah']
        },
        {
        nama: 'Sejarah Islam',
        materi: ['Sejarah Nabi', 'Sejarah Khulafaur Rasyidin', 'Sejarah peradaban Islam', 'Sejarah perkembangan ilmu']
        },
        {
        nama: 'Matematika dan Fisika',
        materi: ['Aljabar', 'Geometri', 'Fisika', 'Arithmatika']
        },
        {
        nama: 'Bahasa Inggris',
        materi: ['Grammar', 'Vocabulary', 'Listening and Speaking', 'Reading and Writing']
        }
        ];

    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6', '#1abc9c', '#e67e22', '#34495e'];

    return (
        <div className="container pelajaran-section">
            <div className='section-title-center'>
                <h5>Mata Pelajaran</h5>
                <span className='section-title-line'></span>
            </div>
            <div className="row">
            {pelajaran_data.map((item, index) => (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="daftar-pelajaran card-design">
                        <div className="nama-pelajaran" style={{backgroundColor:colors[index]}}>                            
                            <p>
                            {item.nama}
                            </p>
                        </div>
                        {item.materi.map((materi, i) => (
                        <div key={i} className="materi-pelajaran">
                            <p>
                            <FcOk size={20} style={{margin:"5px"}} />{materi}
                            </p>
                            <span className="materi-item-underline"></span>
                        </div>
                        ))}
                        
                    </div>                
                </div>
            ))}
            </div>
        </div>
    );
}
export default Pelajaran;
