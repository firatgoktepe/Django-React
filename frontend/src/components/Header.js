import React from 'react'
import { Shellbar } from 'fundamental-react/lib/Shellbar';
import { Menu } from 'fundamental-react/lib/Menu';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const profile = {name: "Arda", lastName: "Arlı", initials: "AA", colorAccent: 20};
    const profileMenu = [
      {name: 'Ayarlar', callback: () => alert('Ayarlar'), glyph: "action-settings"},
    ]
  
    const productMenu = [
      {name: 'Proje 1', callback: () => alert('Proje 1'), glyph: "customer-view"},
    ]
    const navigate = useNavigate();
  return (
    <Shellbar
        logoSAP
        backAction={() => navigate(-1)}
        className="mb-5 p-5"
        size="xl"
        localizedText={{backButtonLabel: 'Geri',
        counterLabel: 'Unread count',
        notificationsButton: 'Notifications'}}
        actions={[
            {
                glyph: 'settings',
                label: 'Ayarlar',
                notificationCount: 3,
                callback: () => console.log('Settings seçildi!'),
                menu: (
                    <Menu>
                        <Menu.List>
                            <Menu.Item url='#'>Seçenek 1</Menu.Item>
                            <Menu.Item url='#'>Seçenek 2</Menu.Item>
                            <Menu.Item url='#'>Seçenek 3</Menu.Item>
                        </Menu.List>
                    </Menu>
                )
            }
        ]}
        
        
        notifications={{
            label: 'Notifications',
            notificationCount: 0,
            // notificationsBody: (
            //     <Menu>
            //         <Menu.List>
            //             <Menu.Item url='#'>Notification 1</Menu.Item>
            //             <Menu.Item url='#'>Notification 2</Menu.Item>
            //             <Menu.Item url='#'>Notification 3</Menu.Item>
            //         </Menu.List>
            //     </Menu>
            // ),
            noNotificationsBody: (
                <Menu>
                    <Menu.List>
                        <Menu.Item>Henüz bildiriminiz yok!</Menu.Item>
                    </Menu.List>
                </Menu>
            )
        }}
        productMenu={productMenu}
        productSwitch={{
            label: 'Product Switch'
        }}
        productSwitchList={[
            {
                callback: () => alert(`Seçildi!`),
                title: 'Standart Zaman Girişi Yap',
                subtitle: 'Veritabanı',
                image: './assets/01.png',
                selected: true,
                glyph: 'home'
            },
            {
                callback: () => navigate('/addproject'),
                title: 'Proje girişi yap',
                image: './assets/02.png',
                glyph: 'cloud'
            },
            {
                callback: () => alert(`Seçildi!`),
                title: 'Günlük Üretim girişi işle',
                image: './assets/03.png',
                glyph: 'business-objects-experience'
            },
            {
                callback: () => alert(`Seçildi!`),
                title: 'Projeler Durum Raporu Al',
                image: './assets/04.png',
                glyph: 'activate'
            },
            {
                callback: () => alert(`Seçildi!`),
                title: 'Projelerde güncelleme yap',
                image: './assets/05.png',
                glyph: 'message-success'
            },
            {
                callback: () => alert(`Seçildi!`),
                title: 'Muhasebe işlemleri yap',
                image: './assets/06.png',
                glyph: 'retail-store'
            },
            {
                callback: () => alert(`Seçildi!`),
                title: 'Malzeme Yönetimi',
                image: './assets/07.png',
                glyph: 'customer-view'
            },
            {
                callback: () => alert(`Seçildi!`),
                title: 'Stok Yönetimi',
                image: './assets/08.png',
                glyph: 'globe'
            },
            {
                callback: () => alert(`Seçildi!`),
                title: 'Endüstriyel Üretim',
                image: './assets/09.png',
                glyph: 'work-history'
            },
            {
                callback: () => alert(`Seçildi!`),
                title: 'Çıkış Yap',
                image: './10.png',
                glyph: 'workflow-tasks'
            },
            // {
            //     callback: () => console.log(`${this.title} selected!`),
            //     title: 'Cloud for Customer',
            //     image: './11.png',
            //     glyph: 'customer-view'
            // },
            // {
            //     callback: () => console.log(`${this.title} selected!`),
            //     title: 'Cloud Portal',
            //     image: '../public/logo192.png',
            //     glyph: 'customer'
            // }
        ]}
        productTitle='Arda ERP'
        profile={profile}
        profileMenu={profileMenu}
        searchInput={{
            label: 'Search',
            placeholder: 'Ara...'
        }}
        subtitle='Endüstriniz için ERP Çözümleri' />
  )
}

export default Header