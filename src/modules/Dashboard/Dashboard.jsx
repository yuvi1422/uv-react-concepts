
import { Route, Routes, Navigate } from 'react-router-dom';

import UVSidebar from '../../components/Core/UVSidebar/UVSidebar';
import UVGrid from '../../components/UVGrid/UVGrid';
import UVFooter from '../../components/Core/UVFooter/UVFooter';

import './Dashboard.css';

import appData from '../../app-data.json';

import CentralContent from '../../components/Core/CentralContent/CentralContent';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import UVTimer from '../../components/UVTimer/UVTimer';

const Dashboard = props => {

  return (
    <div>

      <div className="container-fluid">
        <div className="row">
          <UVSidebar links={appData.sidebar.links} />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route path="*" element={<Navigate to={appData.sidebar.links[0].href} />}></Route>
              <Route path={appData.sidebar.links[0].href}
                element={<CentralContent title={appData.sidebar.links[0].title} />}></Route>
              <Route path={appData.sidebar.links[1].href}
                element={<UVGrid columns={appData.table.columns} rows={appData.table.rows} title={appData.table.title} />}></Route>
              <Route path={appData.sidebar.links[2].href}
                element={<RegistrationForm />}></Route>
              <Route path={appData.sidebar.links[3].href}
                element={<UVTimer initialValue={10}
                  title={appData.timer.title}
                  delay={2000}
                  start={appData.timer.start}
                  pause={appData.timer.pause} />}></Route>

            </Routes>
          </main>
        </div>
      </div>

      <UVFooter message={appData.footer.message} />
    </div>
  )
};

export default Dashboard;
