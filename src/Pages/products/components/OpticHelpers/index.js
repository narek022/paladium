import '../body.css';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function ToolbarOptics() {
  return (
    <div className="uavbtn11">
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup aria-label="Third group">
          <Button href="/IR5120-P">IR5120-P</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button href="/IR5211-P">IR5211-P</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button href="/IR5213-P">IR5213-P</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          <Button href="/IR522-P">IR522-P</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default ToolbarOptics;
