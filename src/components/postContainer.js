import React from 'react';
import '../custom.css';


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
          post:this.props.post,
          id:this.props.id,
          user:this.props.user[0],
          isHidden:true,
          showBtn:"Show More",
          imageUrl:this.props.image
      }
  }

  /**
   * Function in charge of Revealing more User Info
   */
  seeMore=()=>{

    const seeMe = (this.state.isHidden===true)?false:true
    const btnLabel = (this.state.showBtn==="Show More")?"Show Less":"Show More"
    this.setState({
      isHidden: seeMe,
      showBtn:btnLabel
    })
    
  }
   /**
   * Function in charge of Handling post delete (initiated from Parent Component)
   */
  handleDelete=(id)=>{
    this.props.deletePost(id);
  }

  render(){ 
    return (
      <div className="mainContainer" style={{}}>
          <div className="userImage" >
            <img 
              style={{ height:100,width:100}}
            src={this.state.imageUrl.url} />
          </div>

          <div className="postContent" >
                <p>
                <span className="postLabel">Post Number :</span> {(this.state.id)?this.state.id:"N/A"}
                </p>
              
                <p>
                 <span className="postLabel">Post :</span>  {this.state.post}
                </p>
                <div className="userInfo" >
              {/******** Hidden User Info */}
               
                  {!this.state.isHidden&& 
                    <div style={{}}>
                        <p>
                        <span className="postLabel">Username :</span> {(this.state.user.username)?this.state.user.username:"N/A"}
                        </p>
                        <p>
                        <span className="postLabel">Email :</span> {(this.state.user.email)?this.state.user.email:"N/A"}
                        </p>
                        <p>
                        <span className="postLabel">Website :</span>  {(this.state.user.website)?this.state.user.website:"N/A"}
                        </p>
                      </div>
                    }
                </div> {/** End of Hidden User Info */}
                <div>
                    
                <button onClick={this.seeMore} >
                  {this.state.showBtn}
                </button>
                <button onClick={this.props.deletePost}> Delete Post</button>
           </div>
          </div>
          
      </div>
    );
  }
  
}


