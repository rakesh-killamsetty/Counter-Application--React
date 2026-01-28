import React,{useState} from 'react'
import ReactPlayer from 'react-player'

function Users() {
  const [Users,setUsers] = useState([
    {
      uniqueId: 1,
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Rakesh',
      age:22    

    },{
      uniqueId: 2,
      img: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Sanjana',
        age:24  
    },{
      uniqueId: 3,
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'satyam',
      age:25
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const deleteElement = (uniqueId) => {
    const newUsers = [...Users];
    const index = newUsers.findIndex((item) => item.uniqueId === uniqueId);
    if (index !== -1) {
      newUsers.splice(index, 1);
      setUsers(newUsers);
    }
  }
  return (
    <div>
      <h1>Users Management</h1>
      <ReactPlayer 
        src='https://www.w3schools.com/html/mov_bbb.mp4'
        width='100%'
        height='400px'
        controls={true}/>
        
      
      <h1>KANTARA 2</h1>
      <p>uploaded on : {new Date().toISOString().split('T')[0]}</p>
      <h2>List Of Users</h2>
      <input type="text" onChange={handleSearchChange} placeholder='Search the User' style={{marginBottom:'20px'}} />
      <br/>
      
      {/* {comments.map((eachItem,index)=>(
        <div key={index} style={{marginBottom:'20px'}}>
          <img src={eachItem.img} alt={eachItem.name} style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
          <h3>{eachItem.name}</h3>
          <p>{eachItem.comment}</p>
          <button>Delete</button>
        </div>
      ))} */}
      {Users.filter((eachItems)=>eachItems.name.includes(searchTerm)).map((eachItem,index)=>(
        <div key={index} style={{marginBottom:'20px'}}>
          <img src={eachItem.img} alt={eachItem.name} style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
          <h3>{eachItem.name}</h3>
          <p>{eachItem.age}</p>
          <button onClick={() => deleteElement(eachItem.uniqueId)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Users;
