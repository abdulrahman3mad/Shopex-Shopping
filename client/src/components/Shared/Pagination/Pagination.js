// Environment 
import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { useSelector } from "react-redux";

export function Page({ pageNum, active, handleSliding }) {
    return <p className={`page accent-bg-hover fw-bold shadow  border-0 mx-2 ${active && "bg-clr-accent text-white"}`} onClick={(e)=> handleSliding(pageNum)} >{pageNum}</p>
}

export default function Pagination({ maxNumOfitems, ItemsPerPage, handleSliding }) {
    const [window, setWindow] = useState([1]);
    const curPage = useSelector((state) => state.shop.curPage);

    useEffect(()=>{
        handleSliding(1);
    }, [])

    const shiftWindowLeft = () => {
        if (!(curPage <= 1)) handleSliding(curPage - 1);
    }

    const shiftWindowRight = () => {
        if (curPage < getNumOfPages()) handleSliding(curPage + 1);
    }

    useEffect(() => {
        if (checkOverFrame("right")) {
            let updatedWindow = window.slice(1);
            updatedWindow.push(curPage);
            setWindow(updatedWindow);
        }

        else if (checkOverFrame("left")) {
            let updatedWindow = window;
            updatedWindow.pop();
            updatedWindow.unshift(curPage);
            setWindow(updatedWindow)
        }
    }, [curPage])

    const checkOverFrame = (direction) => {
        return (direction === "right") ? curPage > window.at(-1) : curPage < window[0];
    }

    const getNumOfPages = () => {
        return Math.ceil(maxNumOfitems / ItemsPerPage) || 1;
    }

    const range = (start, end) => {
        let arr = [];
        for (let x = start; x <= end; x++) arr.push(x);
        return arr;
    }

    const setPaginationWindow = () => {
        let numOfPages = getNumOfPages();
        setWindow(range(1, numOfPages > 3 ? 3 : numOfPages))
    }


    const ArrowClickHandler = (target) => {
        if (target.id === "back-arrow") shiftWindowLeft();
        else if (target.id === "forward-arrow") shiftWindowRight();
    }

    useEffect(() => {
        setPaginationWindow();
    }, [ItemsPerPage, maxNumOfitems])



    return (
        <div className="pagination | d-flex align-items-center justify-content-center">
            <div className="back-arrow arrow pointer" id="back-arrow" onClick={(e) => ArrowClickHandler(e.target.closest(".arrow"))}> <BsArrowLeft className="back-arrow" /></div>
            <div
                className="pages-container d-flex mx-2"
                id="pages-container">
                {window.map((item) => <Page key={item} pageNum={item} active={curPage === item} handleSliding={handleSliding} />)}
            </div>
            <div className="forward-arrow arrow pointer" id="forward-arrow" onClick={(e) => ArrowClickHandler(e.target.closest(".arrow"))}><BsArrowRight className="forward-arrow" /></div>
        </div>
    )
}
