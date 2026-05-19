import Link from "next/link";
import { orbitServices } from "../data/site";

export default function ServiceOrbit() {
  const repeated = [
    ...orbitServices,
    ...orbitServices,
    ...orbitServices,
    ...orbitServices,
  ];

  return (
    <div className="orbitBox fade-up">
      <div className="orbitTrack trackOne">
        {repeated.map((item, i) => (
          <Link
            href="/services"
            className="orbitChip"
            key={`a-${i}`}
          >
            <span></span>
            {item}
          </Link>
        ))}
      </div>

      <div className="orbitTrack trackTwo">
        {repeated.map((item, i) => (
          <Link
            href="/services"
            className="orbitChip"
            key={`b-${i}`}
          >
            <span></span>
            {item}
          </Link>
        ))}
      </div>

      <div className="orbitTrack trackThree">
        {repeated.map((item, i) => (
          <Link
            href="/services"
            className="orbitChip"
            key={`c-${i}`}
          >
            <span></span>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
