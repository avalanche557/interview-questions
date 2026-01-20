import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const generatePages = (currentpage, totalPages) => {
  if (totalPages === 1) {
    return [1];
  }

  const pages = [];
  const firstpage = 1;
  const prevPage = currentpage - 1;
  const nextPage = currentpage + 1;
  const lastpage = totalPages;

  pages.push(firstpage);

  if (Math.abs(prevPage - firstpage) > 1) {
    pages.push("...");
  }

  if (prevPage > firstpage) {
    pages.push(prevPage);
  }
  if (currentpage !== firstpage && currentpage !== lastpage)
    pages.push(currentpage);

  if (nextPage < lastpage) {
    pages.push(nextPage);
  }

  if (Math.abs(nextPage - lastpage) > 1) {
    pages.push("...");
  }

  pages.push(lastpage);
  return pages;
};

const Pagination = ({ currentpage, totalPages, onChange }) => {
  const generatePageLinks = () => {
    const link = generatePages(currentpage, totalPages).map((item, index) => {
      return (
        <li
          key={item + index}
          onClick={() => {
            item !== "..." && onChange(item);
          }}
          className={currentpage === item ? "active" : null}
        >
          {item}
        </li>
      );
    });
    return link;
  };

  const onPrev = () => {
    if (currentpage > 1) {
      onChange(currentpage - 1);
    }
  };

  const onNext = () => {
    if (currentpage < 10) {
      onChange(currentpage + 1);
    }
  };
  return (
    <div>
      <h2> current page: {currentpage}</h2>

      <ul className="links">
        <li onClick={onPrev}>&lt;</li>
        {generatePageLinks()}
        <li onClick={onNext}>&gt;</li>
      </ul>
    </div>
  );
};

function App() {
  const [currentpage, setCurrentPage] = useState(9);

  const onPageChanges = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pagination
        currentpage={currentpage}
        totalPages={10}
        onChange={onPageChanges}
      />
    </>
  );
}

export default App;
