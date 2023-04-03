import '../body.css';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function ThermalOpticsToolbar() {
  return (
    <div className="uavbtn11">
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup aria-label="Third group">
          <Button href="/IR5118-P">IR5118-P</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button href="/IR5115-P">IR5115-P</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button href="/IR5117-P">IR5117-P</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button href="/IR528-P">IR528-P</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default ThermalOpticsToolbar;
