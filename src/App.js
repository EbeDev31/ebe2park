/**
 *   CHECK LIST
 *  call api
 * display posts
 * read more
 * delete post
 * 
 * 
 * responsiveness
 * 
 *  data availabilty/data test
 * 
 * 
 * 
 * Complete Api calls
 *   set States in Api calls
 * sort out span
 * 
 */




import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from "./components/postContainer"

// Dummy data for personal Testing
const userImageData =[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796.png",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  },
  {
    "albumId": 1,
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "https://via.placeholder.com/600/b0f7cc",
    "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "https://via.placeholder.com/600/54176f",
    "thumbnailUrl": "https://via.placeholder.com/150/54176f"
  },
  {
    "albumId": 1,
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "https://via.placeholder.com/600/51aa97",
    "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
  },
  {
    "albumId": 1,
    "id": 10,
    "title": "beatae et provident et ut vel",
    "url": "https://via.placeholder.com/600/810b14",
    "thumbnailUrl": "https://via.placeholder.com/150/810b14"
  },
  ]

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
          //posts:postsData,
          posts:[],
          //users:usersData,
          users:[],
          //userImage:userImageData,
          userImage:[],
          postsLoading:true,
          usersLoading:true,
          imagesLoading:true,

      }
  }

componentDidMount(){
  this.getPosts();
  this.getUsers();
  this.getUserImages();
  //console.log("Done");
}

/**
 * Function takes an id parameter to retrieve User Details
 */

getUserDetails=(id)=>{
  console.log("this.state.users")
  console.log(this.state.users)
  const user = this.state.users.filter(user=> user.id !==id)
  return user;
}

/**
 * Function takes an id parameter to retrieve User image
 */
getUserImageData=(id)=>{
  console.log("Photo id")
  console.log(id)
  const userImage = this.state.userImage.filter(image=> image.id ===id)
  console.log("Image from App")
  console.log(userImage)
  return userImage;
}

/**
 * Delete a single Post Once given id as parameter
 */
deletePost=(id)=>{  
this.setState(prevState=>({
  posts:prevState.posts.filter(post=> post.id !==id)
}));
}

/**
 * Function in charge of fetching Posts
 */
getPosts=()=>{

    //let url = 'm https://jsonplaceholder.typicode.com/';
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => this.setState({

        posts:json,
        postsLoading:false
        })
      )
};

/**
 * Function in charge of fetching Users
 */
getUsers=()=>{

  //let url = 'm https://jsonplaceholder.typicode.com/';
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => this.setState({

      users:json,
      usersLoading:false
      })
    )
};

/**
 * Function in charge of fetching Images
 */
getUserImages=()=>{

  //let url = 'm https://jsonplaceholder.typicode.com/';
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => this.setState({

      userImage:json,
      imagesLoading:false
      })
    )
};

/**
 * Function in charge Post list setUp
 */

createPostList=()=>{
    console.log("posts")
    console.log(this.state.posts)
    const posts = this.state.posts;
    const listItems = posts.map((post,index) =>
       
      <PostContainer key={post.id} image={this.getUserImageData(post.userId)[0]} user={this.getUserDetails(post.userId)} post={post.body} id={post.id} deletePost={this.deletePost.bind(this,post.id)}/>
    
    );
    return (
      listItems
    );
}

render(){ 
  console.log("we Dey")
    return (

      /******React Header Design **************/
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Time to do some Magic Modified
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
              Learn React
            </a>
          </header>
        {/** ********Start of List Rendering **********************************/}
          <div style={{backgroundColor:"pink"}}>

                {/** ********Make Sure api calls are over then Load posts*******************************/}
              {((this.state.postsLoading)|| (this.state.usersLoading)||  (this.state.imagesLoading))&&
                                <div style={{height:300}}>
                                  <p style={{fontSize:60}}>Loading..........</p>
                                  
                                </div>
                              }
              {((!this.state.postsLoading)&& (!this.state.usersLoading)&& (!this.state.imagesLoading))&&this.createPostList()}

            
          </div>
      </div>
    );
  }
  
}


