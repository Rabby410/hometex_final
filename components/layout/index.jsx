import Footer from "./Footer";
import Footer2 from "./Footer2";
import Header from "./Header";
import Header2 from "./Header2";


const Layout = ({children}) => {
    return ( 
        <div className="app__wrapper">
            <Header2 key="header" />
            {children}
            <Footer2 key="footer" />
        </div>
     );
}
 
export default Layout;