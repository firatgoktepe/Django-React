import { useState, useEffect } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import API from "../API";
import 'font-awesome/css/font-awesome.min.css';

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
          <h3 className="float-left">Yeni Proje Oluştur</h3>
          <Form onSubmit={onSubmit} className="mt-4">
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Proje Kodu</Form.Label>
              <Form.Control
                type="text"
                placeholder="Proje kodunu giriniz"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Proje Adı</Form.Label>
              <Form.Control
                type="text"
                placeholder="Proje adını giriniz"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Yer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Yeri giriniz"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Alan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alanı giriniz"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Yüzey İşlemi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Yüzey işlemini giriniz"
                value={surface_app}
                onChange={(e) => setSurfaceApp(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Boyama Yüzey alanı</Form.Label>
              <Form.Control
                type="text"
                placeholder="Boyama yüzey alanını giriniz"
                value={point_area}
                onChange={(e) => setPointArea(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Teslim Tarihi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Teslim tarihini giriniz"
                value={delivery_date}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>RAL Kodu</Form.Label>
              <Form.Control
                type="text"
                placeholder="RAL kodunu giriniz"
                value={ral_code}
                onChange={(e) => setRalCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>PipeTime</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PipeTime"
                value={pipe_time}
                onChange={(e) => setPipeTime(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>NodeTime</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter NodeTime"
                value={node_time}
                onChange={(e) => setNodeTime(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>PointTime</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PointTime"
                value={point_time}
                onChange={(e) => setPointTime(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>PipeDict</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PipeDict"
                value={pipe_dict}
                onChange={(e) => setPipeDict(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>NodeDict</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter NodeDict"
                value={node_dict}
                onChange={(e) => setNodeDict(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>PipePointDict</Form.Label>
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
                Kaydet
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => onUpdate(projectId)}
                className="mx-2"
              >
                Güncelle
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-md-8 m">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Proje Kodu</th>
                <th scope="col">Proje Adı</th>
                <th scope="col">Yer</th>
                <th scope="col">Alan</th>
                <th scope="col">Yüzey İşlemi</th>
                <th scope="col">Boyama Yüzey Alanı</th>
                <th scope="col">Teslim Tarihi</th>
                <th scope="col">RAL Kodu</th>
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
                    <th scope="row">-</th>
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