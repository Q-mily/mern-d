import { useEffect, useState } from "react";
const API = "http://localhost:7500";

const UserList = (props) =>{
    console.log("List Render");
    const [data, setData] = useState([]);
    // useEffect(() =>{
    //   fetch(`${API}/user`,{
    //     method: "GET"
    //   }).then((res) => res.json())
    //   .then(res =>{
    //     setData(res.datas);
    //   })
    // },[]);

    useEffect(() =>{
      fetch(`${API}/user`,{
        method: "GET"
      }).then((res) => res.json())
      .then(res =>{
        setData(res.datas);
      })
    },[props.renderList]);
    
    return (
        <div className="container w-50">
          <h1 className="text-center">List user</h1>
          <div className="table table-bordered">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th className="text-center">Index</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Age</th>
                  <th className="text-center">Options</th>
                </tr>
              </thead>
              <tbody>   
                  { data.map((item, index) => (
                  <tr key={item._id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">{item.age}</td>
                    <td className="text-center">
                      <button className="btn btn-danger">delete</button>
                    </td>
                  </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
    );
}

export default UserList;