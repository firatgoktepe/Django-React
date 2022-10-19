import { useState, useEffect } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import API from "../API";

const AddProject = ({ onAdd }) => {
  const [projectId, setProjectId] = useState(null);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [surface_app, setSurfaceApp] = useState("");
  const [point_area, setPointArea] = useState("");
  const [delivery_date, setDeliveryDate] = useState("");
  const [ral_code, setRalCode] = useState("");
  const [pipe_time, setPipeTime] = useState("");
  const [node_time, setNodeTime] = useState("");
  const [point_time, setPointTime] = useState("");
  const [pipe_dict, setPipeDict] = useState("");
  const [node_dict, setNodeDict] = useState("");
  const [pipe_point_dict, setPipePointDict] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    refreshProjects();
  }, []);

  const refreshProjects = () => {
    API.get("/")
      .then((res) => {
        setProjects(res.data);
      })
      .catch(console.error);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { code, name, location, area, surface_app, point_area, delivery_date, ral_code, pipe_time, node_time, point_time, pipe_dict, node_dict, pipe_point_dict };
    API.post("/", item).then(() => refreshProjects());
  };

  const onUpdate = (id) => {
    let item = { name };
    API.patch(`/${id}/`, item).then((res) => refreshProjects());
  };

  const onDelete = (id) => {
    API.delete(`/${id}/`).then((res) => refreshProjects());
  };

  function selectProject(id) {
    let item = projects.filter((project) => project.id === id)[0];
    setCode(item.code);
    setName(item.name);
    setLocation(item.location);
    setArea(item.area);
    setSurfaceApp(item.surface_app);
    setPointArea(item.point_area);
    setDeliveryDate(item.delivery_date);
    setRalCode(item.ral_code);
    setPipeTime(item.pipe_time);
    setNodeTime(item.node_time);
    setPointTime(item.point_time);
    setPipeDict(item.pipe_dict);
    setNodeDict(item.node_dict);
    setPipePointDict(item.pipe_point_dict);
    setProjectId(item.id);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h3 className="float-left">Create a new Project</h3>
          <Form onSubmit={onSubmit} className="mt-4">
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}SurfaceApp</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter SurfaceApp"
                value={surface_app}
                onChange={(e) => setSurfaceApp(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}PointArea</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PointArea"
                value={point_area}
                onChange={(e) => setPointArea(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}DeliveryDate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter DeliveryDate"
                value={delivery_date}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}RalCode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter RalCode"
                value={ral_code}
                onChange={(e) => setRalCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}PipeTime</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PipeTime"
                value={pipe_time}
                onChange={(e) => setPipeTime(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}NodeTime</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter NodeTime"
                value={node_time}
                onChange={(e) => setNodeTime(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}PointTime</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PointTime"
                value={point_time}
                onChange={(e) => setPointTime(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}PipeDict</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PipeDict"
                value={pipe_dict}
                onChange={(e) => setPipeDict(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}NodeDict</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter NodeDict"
                value={node_dict}
                onChange={(e) => setNodeDict(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{projectId}PipePointDict</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PipePointDict"
                value={pipe_point_dict}
                onChange={(e) => setPipePointDict(e.target.value)}
              />
            </Form.Group>
            

            <div className="float-right">
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                className="mx-2"
              >
                Save
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => onUpdate(projectId)}
                className="mx-2"
              >
                Update
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-md-8 m">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Code</th>
                <th scope="col">Project Name</th>
                <th scope="col">Location</th>
                <th scope="col">Area</th>
                <th scope="col">Surface App</th>
                <th scope="col">Point Area</th>
                <th scope="col">Delivery Date</th>
                <th scope="col">Ral Code</th>
                <th scope="col">Pipe Time</th>
                <th scope="col">Node Time</th>
                <th scope="col">Point Time</th>
                <th scope="col">Pipe Dict</th>
                <th scope="col">Node Dict</th>
                <th scope="col">Pipe Point Dict</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{project.id}</th>
                    <td>{project.code}</td>
                    <td> {project.name}</td>
                    <td>{project.location}</td>
                    <td>{project.area}</td>
                    <td>{project.surface_app}</td>
                    <td>{project.point_area}</td>
                    <td>{project.delivery_date}</td>
                    <td>{project.ral_code}</td>
                    <td>{project.pipe_time}</td>
                    <td>{project.node_time}</td>
                    <td>{project.point_time}</td>
                    <td>{project.pipe_dict}</td>
                    <td>{project.node_dict}</td>
                    <td>{project.pipe_point_dict}</td>
                    <td>
                      <i
                        className="fa fa-pencil-square text-primary d-inline"
                        aria-hidden="true"
                        onClick={() => selectProject(project.id)}
                      ></i>
                      <i
                        className="fa fa-trash-o text-danger d-inline mx-3"
                        aria-hidden="true"
                        onClick={() => onDelete(project.id)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddProject;