import { useContext } from "react";
import { UseProduct } from "../UseContext";

const ProductList = () => {

    const { productList, setProductId, setCount } = useContext(UseProduct);

    const handleSelectedProduct = (id) => {
        setCount(0);
        setProductId(id);
    }

    return (
        <div className="product__list" style={{ display: "flex", flexWrap: "wrap" }}>
            {
                productList.map((item, index) => (
                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12" key={index}>
                        <div className="product foo" >
                            <div className="product__inner">
                                <div className="pro__thumb">
                                    <a href="#">
                                        <img src={item.imageUrl} alt="product images" />
                                    </a>
                                </div>
                                <div className="product__hover__info">
                                    <ul className="product__action">
                                        <li >
                                            <a
                                                data-toggle="modal" data-target="#productDetail"
                                                onClick={() => handleSelectedProduct(item.id)}
                                            >
                                                <span type="button" className="ti-plus" ></span>
                                            </a>
                                        </li>
                                        <li >
                                            <a title="Add TO Cart" href="cart.html">
                                                <span className="ti-shopping-cart"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="add__to__wishlist">
                                    <a
                                        data-toggle="tooltip"
                                        title="Add To Wishlist"
                                        className="add-to-cart"
                                        href="wishlist.html"
                                    >
                                        <span className="ti-heart" />
                                    </a>
                                </div>
                            </div>
                            <div className="product__details">

                                <h2>
                                    <span>{item.name}</span>
                                </h2>
                                <ul className="product__price">
                                    <li className="old__price"> SIZE {item.size}</li>
                                    <li className="new__price">{item.price} VND</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default ProductList;