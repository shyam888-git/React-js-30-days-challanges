import { CiShoppingCart } from "react-icons/ci";
import Category from "./Category/Category";
import Price from "./Price/Price";
const Sidebar = () => {
    return (
        <section>
            <div className='sidebar'>
                <div className='logo-container'>
                    <h1><CiShoppingCart /></h1>
                </div>
                <Category />
                <Price />
            </div>
        </section>
    )
}

export default Sidebar