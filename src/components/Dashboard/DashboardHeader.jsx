const DashboardHeader = ({
  greeting,
  name,
  subtitle,
  description,
  role,
  logo,
  headerData = {},
}) => {

  const displayGreeting = greeting || headerData.greeting;
  const displayName = name || headerData.name;
  const displaySubtitle = subtitle || headerData.subtitle;
  const displayDescription = description || headerData.description;
  const displayRole = role || headerData.role;
  const displayLogo = logo || headerData.logo;


  return (
    <div className="dashboard-welcome">

      <div className="welcome-left">

        {displayRole && (
          <span className="welcome-role">
            {displayRole}
          </span>
        )}

        {displayGreeting && (
          <h1>
            {displayGreeting}
          </h1>
        )}

        {displayName && (
          <h2>
            {displayName}
          </h2>
        )}

        {displaySubtitle && (
          <h3>
            {displaySubtitle}
          </h3>
        )}

        {displayDescription && (
          <p>
            {displayDescription}
          </p>
        )}

      </div>


      <div className="welcome-right">

        <div className="company-logo">
          {displayLogo || displayName?.charAt(0)}
        </div>

      </div>


    </div>
  );
};


export default DashboardHeader;