import { Button } from "react-bootstrap";
import "./body.css"

export default function Uav () {
  return (
    <div className="uav">
      <Button href="/UAV_EPO">UAV EPO</Button>
      <Button href="/UAV_AG-10">UAV AG-10</Button>
    </div>
  )
}