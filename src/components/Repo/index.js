import React from 'react'
import Carousel from '../Carousel'
import './style.css'

export default function RepoList({ gitData, forks, stargazers, language, repoCreateDate, repoUpdateDate, repoURL}) {

    return (
        <div className="repoContainer">
            <div className='repoList'>
                <Carousel gitData={gitData} forks={forks} stargazers={stargazers} language={language} repoCreateDate={repoCreateDate} repoUpdateDate={repoUpdateDate} repoURL={repoURL} />
            </div>
        </div>
    )
}
