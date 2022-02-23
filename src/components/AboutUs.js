import React from 'react';
import Typing from 'react-typing-animation';
import '../assets/css/Dashboard.css';
import unbox from '../assets/img/Unbox 1.png'


const AboutUs = () => {
    return(
        <div className=' middleHaha fuckPMargin'>
        <div className='aboutBanner fuckPMargin'>
            <img className="smol" src={unbox}/>
            <div className=''>
                 <h>We are UNBOX</h>
                 <p>UNBOX (UNdirected BOys Xystus) merupakan perusahaan berbasis teknologi yang 
berdasar pada empati dan berfokus menjadi media untuk para wirausahawan 
muda agar dapat menunjukkan karya dan memngembangkan dirinya dalam 
bidang ekonomi, sosial, dan kesenian. </p>
            </div>
            
        </div>
        <div className='detailAbout'>
            <h className="idkMan">Mengenai nama dan slogan</h>
            <p>
                <br/>
            </p>
            <p>
                Nama UNBOX tercipta dari hasil bertukar pikiran setiap anggota mengenai topik permasalahan para generasi penerus yang bingung untuk menyalurkan gagasan atau mencari pekerjaan. UNBOX merupakan singkatan dari UNdirected BOys Xystus yang bila diartikan ke dalam Bahasa Indonesia, yaitu:  Jalan bagi anak yang tidak terarah.
            </p>
            <br/>
            <p>UNBOX memiliki slogan yang berbunyi
            “UNBOX your Ideas”, menyimpan makna
            yang mengaju pada setiap orang yang
            terhubung pada UNBOX untuk 
            membuka dan menyampaikan opini 
            serta gagasannya.</p>
        </div>
        <p><br/><br/></p>
        <div className='aboutBanner fuckPMargin'>
            <div className=''>
                 <h>Visi</h>
                 <p>Menjadi perusahaan yang peduli akan kualitas sumber daya manusia serta dapat  menolong atau memberi peluang di bidang ekonomi, sosial, dan kesenian. </p>
                <p><br/></p>
                 <h>Misi</h>
                 <p>1. Membantu wirausahawan untuk terus maju dalam hal pola pikir.</p>
                 <p>2. Menumbuhkan jiwa wirausahawan.</p>
                 <p>3. Menjadi media untuk membantu wirausahawan dalam berkarya.</p>
                 <p>4. Selalu berionovasi serta mengikuti perkembangan teknologi dan informasi.</p>
            </div>
        </div>

        </div>
    );
}

export default AboutUs;