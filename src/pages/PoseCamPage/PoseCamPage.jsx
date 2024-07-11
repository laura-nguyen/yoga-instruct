import PoseCam from "../../components/PoseCam/PoseCam";
import poses from "../../data/yoga_poses.json";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { refreshPage } from "./../../utils/helper.js";
import "./PoseCamPage.scss";

const PoseCamPage = () => {
  const { poseId } = useParams();
  const pose = poses[poseId];
  return (
    <main className="practice">
      <PoseCam pose={pose} />
      <div className="practice__nav" onClick={refreshPage}>
        <NavLink to="/poses" onClick={refreshPage}>
          <button>Back to Poses</button>
        </NavLink>
      </div>
    </main>
  );
};

export default PoseCamPage;
