// import { BaseSyntheticEvent } from "react";
import { useState } from "react";
const List = () => {
    const list = ["HCM", "Đà lạt", "Vũng Tàu"];
    // var selectedIndex = -1; // biến này sẽ là state, mỗi lần state thay đổi => cập nhật DOM ảo

    //useState là fuc cần 1 param init
    // func trả về 1 arr có 2 item
    // item[1]: biến; item[2]: func set lại state
    // const arr = useState(-1);
    // arr[1]; // bien
    // arr[2]; // func set lại state
    // let selectedIndex = -1;

    const [selectedIndex, setSelectIndex] = useState(-1); // chuẩn thì useState<number>(-1); def datetype

    const handleClick = (index: number) => {
        setSelectIndex(index);
    }
    return (
    <>
        <h1>Danh sách thành phố</h1>
        <ul className="list-group">
            {list.length == 0 && <p>Chưa có thành phố</p>}
            {list.map((item, index) => {
                return (
                    <li className= {"list-group-item " + (selectedIndex == index ? "active" : "")} 
                        onClick={() => {
                            handleClick(index);
                        }}
                        key = {item}
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
    </>
  )
}
export default List

// event
// state
// Virtual DOM : giống DOM tất cả nhưng khác:
// hook: những chức năng đã được React định nghĩa sẵn bao gồm State