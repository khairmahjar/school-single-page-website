import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return(
        <div className='container-fluid home' id='home'>
            <div className='container home-content'>
                <h1>
                    <Typewriter
                    options={{
                        strings: ["Pondok Pesantren Darul 'Amal",
                        "Tahfidz Qur'an",
                        "Bahasa Arab"
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </h1>
                <p>
                Pondok Pesantren Darul 'Amal Buni Bakti terletak 
                di desa Buni Bakti, Babelan, Bekasi, Jawa Barat. 
                Lembaga pendidikan Islam ini didirikan pada tahun 
                1984 oleh KH. Madrais Hajar, Lc dan hingga saat ini 
                masih berdiri kokoh dan terus berkembang. Pondok 
                pesantren ini memiliki misi untuk mendidik dan 
                membentuk generasi muda yang taat beragama, berakhlak 
                mulia, serta memiliki kemampuan akademik yang baik.
                </p>
                <span className="daftar-sekarang-home-button">Daftar Sekarang</span>

            </div>
        </div>
    );
}
export default Home;