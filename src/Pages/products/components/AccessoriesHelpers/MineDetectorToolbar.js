import '../body.css';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function MineDetectorToolbar() {
  return (
    <div className="uavbtn11">
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup aria-label="Third group">
          <Button href="/mine-detector-1">Mine Detector</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default MineDetectorToolbar;
