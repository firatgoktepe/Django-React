import React from 'react'
import { Wizard } from 'fundamental-react/lib/Wizard';
import Header from './Header';

const Home = () => {

  
  return (
    <div className="container mt-5">
      
    
        <Header />

      <div className="row">
        
      </div>
        <h2 className="titleStarter">Bu uygulama ile neler yapabilirsiniz?</h2>
      <Wizard
        cancelLabel='Çıkış'
        contentSize='sm'
        headerSize='sm'
        nextLabel='İleri'
        onCancel={() => alert('Wizard iptal edildi')}
        onComplete={() => alert('Wizard bitti')}
        style={{ height: '20rem', padding: '1rem' }}>
        <Wizard.Step title="Standart Zaman Girişi Yap">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </Wizard.Step>
        <Wizard.Step title="Proje Girişi Yap">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </Wizard.Step>
        <Wizard.Step title="Günlük Üretim Girişi İşle">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </Wizard.Step>
        <Wizard.Step title="Projeler Durum Raporu Al">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </Wizard.Step>
        <Wizard.Step title="Projelerde Güncelleme Yap">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </Wizard.Step>
        <Wizard.Step title="Muhasebe İşlemleri Yap">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </Wizard.Step>
        <Wizard.Step title="Malzeme Yönetimi">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </Wizard.Step>
        <Wizard.Step nextLabel='Bitti' title="Endüstriyel Üretim">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </Wizard.Step>
    </Wizard>
    </div>
  )
}

export default Home