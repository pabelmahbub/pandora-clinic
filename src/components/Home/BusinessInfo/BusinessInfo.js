import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: '営業時間',
        description: '7日間開いています',
        icon: faClock,
        background: 'primary'
    },
    {
        title: '私たちの場所をご覧ください',
        description: '東京都板橋区2-7-3、ゴールデンマンシオン',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'お電話ください',
        description: '+810000000',
        icon: faPhone,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;