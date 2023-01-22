import React, { useState, useEffect } from 'react'
import './styles.css'
import User from '../User'
import RepoList from '../Repo/'


export default function SearchForm() {
    // Repo states
    const [gitData, setGitData] = useState([])
    const [inputData, setInputData] = useState("")
    const [avatar, setAvatar] = useState("")
    const [login, setLogin] = useState("")
    const [forks, setForks] = useState("")
    const [language, setLanguage] = useState("")
    const [stargazers, setStargazers] = useState("")
    const [repoCreateDate, setRepoCreateDate] = useState("")
    const [repoUpdateDate, setRepoUpdateDate] = useState("")
    const [repoURL, setRepoURL] = useState("")

    // User states
    const [followers, setFollowers] = useState("")
    const [following, setFollowing] = useState("")
    const [createDate, setCreateDate] = useState("")
    const [htmlUrl, setHtmlUrl] = useState("")


    useEffect(() => {
        getData("oscr1998")
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        getData(inputData)
        setInputData('')
    }

    const updateInput = (e) => {
        const input = e.target.value
        setInputData(input)
    }

    async function getData(username) {
        const fetchApiRepo = `https://api.github.com/users/${username}/repos?per_page=100&page=1`
        const fetchApiUser = `https://api.github.com/users/${username}`
        try {
            const apiDataRepo = await fetch(fetchApiRepo);
            const repoData = await apiDataRepo.json();

            const apiDataUser = await fetch(fetchApiUser);
            const userData = await apiDataUser.json()

            // User info
            const followers = userData.followers
            const following = userData.following
            const createDate = userData.created_at
            const userURL = userData.html_url

            // Repo info
            const repoNames = repoData.map(repo => repo.name)
            const avatar = repoData.map(repo => repo.owner.avatar_url)
            const login = repoData.map(repo => repo.owner.login)
            const forks = repoData.map(repo => repo.forks_count)
            const stargazers_count = repoData.map(repo => repo.stargazers_count)
            const language = repoData.map(repo => repo.language)
            const repoCreateDate = repoData.map(repo => repo.created_at)
            const repoUpdateDate = repoData.map(repo => repo.updated_at)
            const repoURL = repoData.map(repo => repo.html_url)

            // User setters
            setFollowers(followers)
            setFollowing(following)
            setCreateDate(createDate)
            setHtmlUrl(userURL)

            // Repo setters
            setGitData(repoNames)
            setAvatar(avatar)
            setLogin(login)
            setForks(forks)
            setStargazers(stargazers_count)
            setLanguage(language)
            setRepoCreateDate(repoCreateDate)
            setRepoUpdateDate(repoUpdateDate)
            setRepoURL(repoURL)

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <div className='header'>
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" placeholder="Search user here..." onChange={updateInput} value={inputData} className="formInput"></input>
                    <input type="submit" className='formButton' value="+"></input>
                </form>
                <img src={avatar} className="userImgUpTop"></img>
            </div>
            <User avatar={avatar} username={login[0]} repoNum={gitData.length} followers={followers} following={following} createDate={createDate} URL={htmlUrl}/>
            <RepoList gitData={gitData} forks={forks} stargazers={stargazers} language={language} repoCreateDate={repoCreateDate} repoUpdateDate={repoUpdateDate} repoURL={repoURL} />

        </div>
    )

}
