import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux";
import { setCurPage } from "../../redux-toolkit/features/productsSlice";

export function Page({ pageNum, active }) {
    return <p className={`page accent-bg-hover fw-bold shadow  border-0 mx-2 ${active && "bg-clr-accent text-white"}`}>{pageNum}</p>
}

export default function Pagination({ maxNumOfitems, ItemsPerPage, handleChangeInPagi }) {
    const dispatch = useDispatch()
    const [window, setWindow] = useState([1]);
    const [numOfPages, setNumOfPages] = useState(1);
    const { products: { curPage } } = useSelector((state) => state)

    const isThereMoreItems = (page) => (page <= numOfPages);

    const checkOverFrame = (direction) => {
        return (direction == "right") ? curPage > window.at(-1) : curPage < window[0];
    }

    const shiftWindowLeft = () => {
        dispatch(setCurPage(curPage - 1));
    }

    const shiftWindowRight = () => {
        dispatch(setCurPage(curPage + 1));
    }

    const checkOverPages = () => curPage <= 1;

    let range = (start, end) => {
        let arr = [];
        for (let x = start; x <= end; x++) arr.push(x);
        return arr;
    }


    const setPaginationWindow = () => {
        (numOfPages >= 3) ? setWindow([1, 2, 3]) : setWindow(range(1, Math.ceil(maxNumOfitems / ItemsPerPage)));
    }
    const ArrowClickHandler = (target) => {
        if (target.id === "back-arrow") shiftWindowLeft();
        else if (target.id === "forward-arrow") shiftWindowRight();
    }

    useEffect(() => {
        setPaginationWindow();
    }, [])

    return (
        <div className="pagination | d-flex align-items-center justify-content-center">
            <div className="back-arrow arrow pointer" id="back-arrow" onClick={(e) => ArrowClickHandler(e.target.closest(".arrow"))}> <BsArrowLeft className="back-arrow" /></div>
            <div
                className="pages-container d-flex mx-2"
                id="pages-container">
                {window.map((item, index) => <Page key={item} pageNum={item} active={curPage - 1 === index} />)}
            </div>
            <div className="forward-arrow arrow pointer" id="forward-arrow" onClick={(e) => ArrowClickHandler(e.target.closest(".arrow"))}><BsArrowRight className="forward-arrow" /></div>
        </div>
    )
}
