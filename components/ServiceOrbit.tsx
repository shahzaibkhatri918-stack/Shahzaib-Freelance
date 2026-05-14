import Link from "next/link";
import { orbitServices } from "../data/site";

export default function ServiceOrbit() {
  const row1 = orbitServices.slice(0, 4);
  const row2 = orbitServices.slice(4, 8);
  const row3 = orbitServices.slice(8, 12);

  return (
    <div className="orbitBox fade-up">
      <div className="orbitText">
        <h3>Service Motion System</h3>
        <p>Click any service to open the services page.</p>
      </div>

      <div className="orbitLane laneOne">
        {row1.map((item) => <Link href="/services" className="orbitChip" key={item}><span></span>{item}</Link>)}
      </div>
      <div className="orbitLane laneTwo">
        {row2.map((item) => <Link href="/services" className="orbitChip" key={item}><span></span>{item}</Link>)}
      </div>
      <div className="orbitLane laneThree">
        {row3.map((item) => <Link href="/services" className="orbitChip" key={item}><span></span>{item}</Link>)}
      </div>
    </div>
  );
}
