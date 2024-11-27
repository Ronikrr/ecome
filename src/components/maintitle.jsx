// useDocumentTitle.js
import { useEffect } from "react";

const Maintitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

export default Maintitle;
