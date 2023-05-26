import React from 'react'
import "../styles/dashboard.css"
import SingleCard from '../components/reuseable/SingleCard'

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts';

import mileStatics from '../assets/dummy-data/mileStatics';


const carObj = {
    title: "Total Cars",
    totalNumber: 750,
    icon: "ri-police-car-line"
};

const tripObj = {
    title: "Daily Trips",
    totalNumber: 1697,
    icon: "ri-steering-2-line",
};

const clientObj = {
    title: "Clients Annually",
    totalNumber: "85k",
    icon: "ri-user-line",
};

const distanceObj = {
    title: "Kilometers Daily",
    totalNumber: 2167,
    icon: "ri-timer-flash-line",
};

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className="dashboard__wrapper">
                <div className="dashboard__cards">
                    <SingleCard item={carObj} />
                    <SingleCard item={tripObj} />
                    <SingleCard item={clientObj} />
                    <SingleCard item={distanceObj} />
                </div>

                <div className="statics">
                    <div className="stats">
                        <ResponsiveContainer width="100%" aspect={4 / 1}>
                            <BarChart data={mileStatics}>
                                <XAxis dataKey="name" stroke='#2884ff' />
                                <Bar dataKey="mileStats" stroke='#2884ff' fill='#2884ff' />
                                <Tooltip />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dashboard