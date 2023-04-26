import React, {useEffect, useState } from "react";

function FetchApi() {
    const [avatarUrl, setAvatarUrl] = useState([]);
    const [username, setUsername] = useState([]);
    const [repoData, setRepoData] = useState();


    async function repoDataUrl(){
        await fetch("https://api.github.com/users/LiveDetermined/repos")
            .then((res)=> res.json())
            .then(
                (result) => {
                    console.log(36, result);
                    const list = result.map((item) => (
                        <div>
                            <a target="_blank" href={item.svn_url}>{item.name}</a>
                        </div>
                    ));
                    setRepoData(list);
                    },
                    (error) => {
                        console.log(error);
                    }
            );
    }

    useEffect(() => {
        fetch("https://api.github.com/users/Livedetermined")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setAvatarUrl(result.avatarUrl);
                    setUsername(result.login);
                },
                (error) => {
                console.log(error);
                }
            );
    }, []);

    return(
        <>
        <img src={avatarUrl}/>
        <div>{username}</div>
        <button onCick={repoDataUrl}>Find users</button>
        {repoData}
        </>
    )
};


export default FetchApi;