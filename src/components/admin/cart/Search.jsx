import { useEffect, } from 'react';
import { CartService } from '../../../service/admin/cart/cartService';
import { ToastError } from '../../../toastify/Toast';

// eslint-disable-next-line react/prop-types
const Search = ({ setSearch, search, setPreListCart, statusCart }) => {

  useEffect(() => {
    try {
      // eslint-disable-next-line no-inner-declarations
      async function searchNameAndPhone(search, status) {
        let response = await CartService.searchNameAndPhone(search, status.id);
        setPreListCart(response.data.content.filter(e => e.statusId != 5));
        if (response.data.content.length === 0) {
          ToastError("Không tìm thấy dữ liệu")
        }
      }
      const timeOut = setTimeout(() => {
        console.log(statusCart)
        searchNameAndPhone(search, statusCart);
      }, 1000)
      return () => {
        clearTimeout(timeOut)
      }
    } catch (error) {
      ToastError("Tìm kiếm bị lỗi");
    }
  }, [search])



  return (
    <div className=" shadow-sm mb-4 border-end-0 border rounded animate__animated  animate__bounceInRight">
      <div className="input-group">
        <input
          type="search"
          placeholder="Nhập tên hoặc SDT bạn cần tìm?"
          aria-describedby="button-addon1"
          className="form-control border-0 bg-light"
          id='searchNameAndPhone'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>

  );
};

export default Search;