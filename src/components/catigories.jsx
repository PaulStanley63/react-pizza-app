import React from "react";

function Catigories(){

  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ];

  const onClickIndex = (index) => {
    setActiveIndex(index);
  };

    return(
      <div className="categories">
      <ul>
        {
          categories.map((value, index) => (<li onClick = {() => onClickIndex(index)} className={activeIndex === index ? 'active' : ''}>{value}</li>))
        }
      </ul>
    </div>
    )
  }

  export default Catigories;