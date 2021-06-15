import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import HistoryPage from "../pages/HistoryPage";
import QuotePage from "../pages/QuotePage";
import ContactPage from "../pages/ContactPage";
import ThomasShelby from "../pages/ThomasShelby";
import GraceShelby from "../pages/GraceShelby";
import ArthurShelby from "../pages/ArthurShelby";
import AlfieSolomon from "../pages/AlfieSolomon";
import PollyShelby from "../pages/PollyShelby";
import ErrorPage from "../pages/ErrorPage";

const ArticleArea = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/quote" component={QuotePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/thomas_shelby" component={ThomasShelby} />
        <Route path="/grace_shelby" component={GraceShelby} />
        <Route path="/arthur_shelby" component={ArthurShelby} />
        <Route path="/alfie_solomon" component={AlfieSolomon} />
        <Route path="/polly_shelby" component={PollyShelby} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default ArticleArea;
