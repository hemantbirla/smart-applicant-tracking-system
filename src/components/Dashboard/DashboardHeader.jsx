const DashboardHeader = ({ title, greeting, name, subtitle }) => {

  return (
    <div className="dashboard-header"> 
      <h1 className="dashboard-title"></h1>

      {(greeting || name) && (
        <div className="dashboard-welcome">
          {greeting && <h2>{greeting}</h2>}
          {name && <h3>{name}</h3>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;