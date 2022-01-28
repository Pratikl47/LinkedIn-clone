import React, { useEffect, useState } from 'react';
import "./Feed.css";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import InputOption from './InputOption';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Post from "./Post";
import SendSharpIcon from '@mui/icons-material/SendSharp';
// import { db } from "./firebase";
// import firebase from "firebase";


function Feed() {
    const [feed, setFeeds] = useState(null);
    // const [input, setInput] = useState('');
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     db.collection("posts")
    //         .orderBy("timestamp", "desc")
    //         .onSnapshot((snapshot) =>
    //             setPosts(
    //                 snapshot.docs.map((doc) => ({
    //                     id: doc.id,
    //                     data: doc.data(),
    //                 }))
    //             )
    //         );
    // }, [])

    // const sendPost = (e) => {
    //     e.preventDefault();

    //     db.collection['posts'].add({
    //         name: "Edna George",
    //         description: "Senior Talent Acquisition Researcher at IDN",
    //         message: input,
    //         photoUrl: "",
    //         timestamp: firebase.firestore.FieldValue.serverTimestamp()
    //     });
    //     setInput("");
    // };

    useEffect(() => {
        fetch('https://api.unsplash.com/photos?page=1&&client_id=41d46225d571eaf038ef9de4a666a459a6ff9a1e19b433390fdd98794693621d')
            .then(response => response.json())
            .then(data => setFeeds(data));

    }, []);

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    {/* <BorderColorOutlinedIcon /> */}
                    <p>Write here. Add images or a video for visual impact.</p>
                    {/* <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form> */}
                </div>
                <div className="feed__inputOptions">
                    <div className="inputOptions__left">
                        <InputOption Icon={ArticleOutlinedIcon} title="Article" />
                        <InputOption Icon={CameraAltOutlinedIcon} title="Image" />
                        <InputOption Icon={VideocamOutlinedIcon} title="Video" />
                    </div>
                    <div className="inputOptions__right">
                        <SendSharpIcon style={{ color: "blue" }} className="feed__inputOptipns__sendicon" />
                    </div>
                </div>

            </div>

            {/* Posts */}
            {feed && feed.length > 0 && feed.map((data, id) => {
                console.log('itemmmm', data)
                return (
                    <Post
                        key={id}
                        name={data?.user?.name}
                        description={data?.description}
                        message={data?.user?.bio}
                        photoUrl={data?.user?.profile_image?.medium}
                        image={data?.urls?.full}
                    />
                )
            })}
            {/* <Post
                name="Edna George"
                description="Senior Talent Acquisition Researcher at IDN"
                message="Gi Community, I'm looking gor Java Full Stack and Test Automation (Java/JavaScript) Engineers in United States. Ask me"
            /> */}
        </div>
    )
}

export default Feed;
