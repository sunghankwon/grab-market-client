import logo from "./logo.svg";
import "./App.css";
import MainpageComponent from "./main/index.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainpageComponent />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
