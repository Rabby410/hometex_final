import Footer from "./Footer";
import Header from "./Header";
import Header2 from "./Header2";


const Layout = ({children}) => {
    return ( 
        <div className="app__wrapper">
            <Header2 key="header" />
            {children}
            <Footer key="footer" />
        </div>
     );
}
 
export default Layout;