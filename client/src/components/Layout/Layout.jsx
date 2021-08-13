import './Layout.css'
import Nav from '../Nav/Nav'
 
const Layout = (props) => (
    <div className='layout'>
        <Nav />
        <div className="layout-children">
            {props.children}
        </div>
        {/* <Footer /> */}
    </div>
)

export default Layout