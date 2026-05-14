import Link from "next/link";
import { orbitServices } from "../data/site";

export default function ServiceOrbit() {
  const items = [...orbitServices, ...orbitServices];
  return (
    <div className="orbitBox fade-up">
      <div className="orbitText"><h3>Service Motion System</h3><p>Click any service to open the services page.</p></div>
      <div className="orbitTrack trackOne">{items.map((item, i)=><Link href="/services" className="orbitChip" key={"a"+i}><span></span>{item}</Link>)}</div>
      <div className="orbitTrack trackTwo">{items.map((item, i)=><Link href="/services" className="orbitChip" key={"b"+i}><span></span>{item}</Link>)}</div>
      <div className="orbitTrack trackThree">{items.map((item, i)=><Link href="/services" className="orbitChip" key={"c"+i}><span></span>{item}</Link>)}</div>
    </div>
  );
}
