import { MdKeyboardArrowDown } from 'react-icons/md';

function ScrollButton({ onClick }) {
    return (
        <button id="down-arrow" onClick={ onClick }>
            <MdKeyboardArrowDown />
        </button>
    );
}

export default ScrollButton;