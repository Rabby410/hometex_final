import Footer2 from "./Footer2";
import Header3 from "./Header3";


const Layout = ({children}) => {
    return ( 
        <div className="app__wrapper">
            <Header3 key="header" />
            {children}
            <Footer2 key="footer" />
        </div>
     );
}
 
export default Layout;