import React from 'react'
import {useSate} from 'react'
import "./header.jsx"
function amazonClone() {
    // create Three kinds of Lists static/ responsive/ dynamic
    const [staticList, setStaticList] = useState([
        { id: 1, name: 'Static Item 1',age:25 },
        { id: 2, name: 'Static Item 2',age:30 },
        { id: 3, name: 'Static Item 3',age:35 }
    ]);

    const [responsiveList, setResponsiveList] = useState([
        { id: 4, name: 'Responsive Item 1' },
        { id: 5, name: 'Responsive Item 2' }
    ]);

    const [dynamicList, setDynamicList] = useState([
        { id: 6, name: 'Dynamic Item 1' },
        { id: 7, name: 'Dynamic Item 2' }
    ]);

  return (
    <div>
      <header/>
      <h1>Projects</h1>
      <p>lkfnlfoidsjflmzf;cokdpvz;vkzpujvjzlvmz;vdlvmlcmdlcvmdjvdvd</p>
      <button>Static</button>
      <button>Responsive</button>
        <button>Dynamic</button>

        <div>
            {staticList.map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Age: {item.age}</p>
                </div>
            ))} 
        </div>

    </div>
  )
}

export default amazonClone
