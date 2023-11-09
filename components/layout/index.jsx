import Footer from "./Footer";
import Header from "./Header";


const Layout = ({children}) => {
    return ( 
        <div className="app__wrapper">
            <Header key="header" />
            {children}
            <Footer key="footer" />
        </div>
     );
}
 
export default Layout;