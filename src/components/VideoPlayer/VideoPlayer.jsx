import React,{useState} from 'react'

function VideoPlayer() {
  const [comments,setComments] = useState([
    {
      uniqueId: 1,
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'John Doe',
      comment: 'Great video! Really enjoyed the content.',      

    },{
      uniqueId: 2,
      img: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Jane Smith',
      comment: 'Very informative and well presented.',  
    },{
      uniqueId: 3,
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'Mike Johnson',
      comment: 'I learned a lot from this video. Thanks for sharing!',
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const deleteElement = (uniqueId) => {
    const newComments = [...comments];
    const index = newComments.findIndex((item) => item.uniqueId === uniqueId);
    if (index !== -1) {
      newComments.splice(index, 1);
      setComments(newComments);
    }
  }
  return (
    <div>
      <h1>Video Player</h1>
      <video src="https://www.w3schools.com/html/mov_bbb.mp4" width="600" controls></video>
      <h1>This is a w3schools video tutorial</h1>
      <p>uploaded on : {new Date().toISOString().split('T')[0]}</p>
      <h2>Comments</h2>
      <input type="text" onChange={handleSearchChange} placeholder='Search the Comment' style={{marginBottom:'20px'}} />
      <br/>
      
      {/* {comments.map((eachItem,index)=>(
        <div key={index} style={{marginBottom:'20px'}}>
          <img src={eachItem.img} alt={eachItem.name} style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
          <h3>{eachItem.name}</h3>
          <p>{eachItem.comment}</p>
          <button>Delete</button>
        </div>
      ))} */}
      {comments.filter((eachItems)=>eachItems.name.includes(searchTerm)).map((eachItem,index)=>(
        <div key={index} style={{marginBottom:'20px'}}>
          <img src={eachItem.img} alt={eachItem.name} style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
          <h3>{eachItem.name}</h3>
          <p>{eachItem.comment}</p>
          <button onClick={() => deleteElement(eachItem.uniqueId)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default VideoPlayer
