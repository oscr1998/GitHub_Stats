import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import star from '../images/star.svg';
import fork from '../images/code-branch.svg';
import calendar1 from '../images/calender.svg'
import calendar2 from '../images/calendar-alt.svg'
import curlyBoiz from '../images/brackets-curly.svg'

export default function Carousel({ gitData, forks, stargazers, language, repoCreateDate, repoUpdateDate, repoURL }) {
    var half_length = Math.ceil(gitData.length / 2)

    return (
        <>
            <h2>List of Repositories:</h2>
            <br />
            <div className='accordianContainer'>
                <div className='firstHalf'>
                    {gitData.slice(0, half_length).map((b, index) => <Accordion key={Math.random() * 99999}>
                        <Accordion.Item eventKey="0" className="statsContainerHeader">
                            <Accordion.Header><a href={repoURL[index]} className="accordHead">{b}</a></Accordion.Header>
                            <Accordion.Body className='statsContainer'>
                                <ul>
                                    <li className='stats'><img className='icons' src={fork} alt='fork' /> Forks: {forks[index]}</li>
                                    <li className='stats'><img className='icons' src={star} alt='star' /> Stars: {stargazers[index]}</li>
                                    <li className='stats'><img className='icons' src={calendar1} alt='calendar' /> Created: {repoCreateDate[index].slice(0, 10)}</li>
                                    <li className='stats'><img className='icons' src={calendar2} alt='calendar' /> Updated: {repoUpdateDate[index].slice(0, 10)}</li>
                                    <li className='stats'><img className='icons' src={curlyBoiz} alt='curly boiz' /> Language: {language[index] ? language[index] : "N/A"}</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>)}
                </div>

                <div className='secondHalf'>
                    {gitData.slice(half_length).map((b, index) => <Accordion key={Math.random() * 99999}>
                        <Accordion.Item eventKey="0" className="statsContainerHeader">
                            <Accordion.Header><a href={repoURL[index]} className="accordHead">{b}</a></Accordion.Header>
                            <Accordion.Body className='statsContainer'>
                                <ul>
                                    <li className='stats'><img className='icons' src={fork} alt='fork' /> Forks: {forks[index]}</li>
                                    <li className='stats'><img className='icons' src={star} alt='star' /> Stars: {stargazers[index]}</li>
                                    <li className='stats'><img className='icons' src={calendar1} alt='calendar' /> Created: {repoCreateDate[index].slice(0, 10)}</li>
                                    <li className='stats'><img className='icons' src={calendar2} alt='calendar' /> Updated: {repoUpdateDate[index].slice(0, 10)}</li>
                                    <li className='stats'><img className='icons' src={curlyBoiz} alt='curly boiz' /> Language: {language[index] ? language[index] : "N/A"}</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>)}
                </div>

            </div>
        </>
    )
}
