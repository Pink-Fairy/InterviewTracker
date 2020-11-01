import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

export default function Job() {
    const [jobs, setJobs] = useState([]);
    const [token, setToken] = useState('');

    const getJobs = async (token) => {
        const res = await axios.get('api/jobs', {
            headers: {Authorization: token}
        })
        setJobs(res.data); 
    }
    useEffect(() => {
        const token = localStorage.getItem('tokenStore');
        setToken(token);
        if (token) {
            getJobs(token);
        }
    }, [])

    return (
        <div className="Job">
            {
                jobs.map(job => (
                    <div className='oneJob' key={job._id}>

                    </div>
                ))
            }
        </div>
    )
}