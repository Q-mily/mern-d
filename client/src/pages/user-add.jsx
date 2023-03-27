import { useFormik } from "formik";
const API = "http://localhost:7500";
const UserAdd = (props) =>{
    console.log("Add Render");
    const formik = useFormik({
        initialValues:{
            name: "",
            age: "",
        },
        onSubmit: (values) =>{
            fetch(`${API}/user`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(values)
            }).then((res) => res.json())
            .then((res) =>{
                if (res.status == 201){
                    alert("Add user successfully")
                    props.setRenderList({...values, a: 1});
                }  
            })
        }
    });

    return (
    <div className="container w-25">
        <h1>Add User Form</h1>
        <div className="form-group mt-2">
          <label htmlFor="">Full name</label>
          <input type="text" className="form-control" name="name" value={formik.values.name}  onChange={formik.handleChange}/>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="">Age</label>
          <input type="number" className="form-control" name="age" value={formik.values.age} onChange={formik.handleChange}/>
        </div>
        <button className="btn btn-primary mt-2" onClick={formik.handleSubmit}>Submit</button>
    </div>
    );
}

export default UserAdd;