import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Question({questions}) {
const [expandedIndex, setExpandedIndex] = useState(-1);
const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
        setExpandedIndex(-1);
    } else {
        setExpandedIndex(nextIndex);
    }
}
const renderedQuestions = questions.map((question, index) => {
    const isExpanded = index === expandedIndex;
    const icon = <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
   return (
    <div key={question.id}>
        <div className="flex p-3 bg-gray-50 border-b items center cursor-pointer justify-between" onClick={() => {
            handleClick(index)
        }}>{question.label}
        {icon}</div>
        <div>
        {isExpanded && <div className="border-b p-5">{question.content}</div>}
        </div>
    </div>
   )
})

return (
    <div className="border-x bborder-t rounded">
        <h1 className="text-4xl p-7 text-cyan-700">Frequently asked questions</h1>
     <div>{renderedQuestions}</div>
     </div>
)

}

export default Question;