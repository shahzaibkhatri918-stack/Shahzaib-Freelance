"use client";
import { useState } from "react";
import { categories, projects } from "../data/site";

export default function PortfolioFilter() {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.type === active);
  return (
    <>
      <div className="categoryRow">
        {categories.map((cat) => (
          <button className={`category ${active === cat.key ? "active" : ""} ${cat.tone}`} key={cat.key} onClick={() => setActive(cat.key)}>
            <span className="catIcon">▣</span>
            <b>{cat.name}</b>
            <small>{cat.detail}</small>
          </button>
        ))}
      </div>

      <div className="showingPill">Showing {visible.length} {active === "all" ? "projects" : "project"}</div>

      <div className="grid portfolioGrid">
        {visible.map((project) => (
          <article className="projectCard fade-up" key={project.title}>
            <div className="projectThumb">
           <video
  src={project.video}
  controls
  playsInline
  className="projectVideo"
/>
<span className="playDot">▶</span>
<div className="thumbFallback">Upload<br />{project.video}</div>
            </div>
            <div className="projectInfo">
              <span className="tag">{project.label}</span>
              <h3>{project.title}</h3>
              <p>Replace this placeholder with your real video thumbnail or project preview.</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
