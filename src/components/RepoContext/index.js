import React, { createContext, useState } from "react";

const fetchApi = `https://api.github.com/users/${username}/repos?per_page=100&page=1`
const apiData = await fetch(fetchApi);
const data = await apiData.json();

export const RepoContext = createContext()

export const RepoProvider = (props) => {
    const [repos, setRepos] = useState(repos);
    return (
        <RepoContext.Provider value={[repos, setRepos]}>
            {props.children}
        </RepoContext.Provider>
    )
}