import { useState } from "react";
import "./Ibu.css";

// IBU = (Alpha Acids% x hops Utilzation rate x Weight of hops x 7489)/volume of wort

function Ibu() {
  const [acid, setAcid] = useState("");
  const [hops, setHops] = useState("");
  const [weight, setWeight] = useState("");
  const [volume, setVolume] = useState("");

  const [updatedAcid, setUpdatedAcid] = useState(acid);
  const [updatedHops, setUpdatedHops] = useState(hops);
  const [updatedWeight, setUpdatedWeight] = useState(weight);
  const [updatedVolume, setUpdatedVolume] = useState(volume);

  const changeAcid = (event) => {
    setAcid(event.target.value);
  };

  const changeHops = (event) => {
    setHops(event.target.value);
  };

  const changeWeight = (event) => {
    setWeight(event.target.value);
  };

  const changeVolume = (event) => {
    setVolume(event.target.value);
  };

  const bitter = () => {
    let bit = updatedAcid * updatedHops * updatedWeight * 7489;

    let inbit = bit / updatedVolume;

    let bitt = Math.round(inbit * 100) / 100;

    if (isNaN(inbit)) {
      return 0;
    } else {
      return bitt;
    }
  };

  const handleClick = () => {
    setUpdatedAcid(acid);
    setUpdatedHops(hops);
    setUpdatedWeight(weight);
    setUpdatedVolume(volume);
  };

  return (
    <div>
      <form className="ibu-form">
        <div>
          <input
            className="alpha-acid"
            placeholder="Alpha Acid %"
            value={acid}
            onChange={(e) => changeAcid(e)}
          ></input>
        </div>

        <div>
          <input
            className="hops"
            placeholder="hops Utilization rate"
            value={hops}
            onChange={(e) => changeHops(e)}
          ></input>
        </div>

        <div>
          <input
            className="weight"
            placeholder="Weight of hops"
            value={weight}
            onChange={(e) => changeWeight(e)}
          ></input>
        </div>

        <div>
          <input
            className="volume"
            placeholder="Volume of wort"
            value={volume}
            onChange={(e) => changeVolume(e)}
          ></input>
        </div>
      </form>

      <div>
        <button className="btn" onClick={handleClick}>
          Calculate
        </button>
      </div>

      <div className="ibu-declare">
        The bitterness of your beer is: {bitter()}
      </div>
    </div>
  );
}

export default Ibu;
