import '../body.css';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function NightVisionToolbar() {
  return (
    <div className="uavbtn11">
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup aria-label="Third group">
          <Button href="/IR5116-P">IR5116-P</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default NightVisionToolbar;
