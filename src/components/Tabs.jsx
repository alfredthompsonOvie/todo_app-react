/* eslint-disable react/prop-types */
function Tabs({onActiveTab, activeTab}) {
	return (
		<section className="tabs__container">
      <button className="btn" onClick={()=>onActiveTab("all")}>
				<span className="btn__text">All</span>
				<span className={`line ${activeTab === "all" ? "active" : ""}`}></span>
			</button>

			<button className="btn" onClick={()=>onActiveTab("active")}>
				<span className="btn__text">Active</span>
        <span className={`line ${activeTab === "active" ? "active" : ""}`}></span>
			</button>

			<button className="btn" onClick={()=>onActiveTab("completed")}>
				<span className="btn__text">completed</span>
				<span className={`line ${activeTab === "completed" ? "active" : ""}`}></span>
			</button>
		</section>
	);
}

export default Tabs;
