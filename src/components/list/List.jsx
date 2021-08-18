import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import ListItem from '../listitem/ListItem';
import './list.scss';

function List() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0){
      setSlideNumber(slideNumber - 1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }

    if (direction === "right" && slideNumber < 4){
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined 
          className="sliderArrow left" 
          onClick={()=> handleClick("left")} 
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
          <ListItem index={10}/>
          <ListItem index={11}/>
          <ListItem index={12}/>
          <ListItem index={13}/>
          <ListItem index={14}/>
          <ListItem index={15}/>
          <ListItem index={16}/>
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=> handleClick("right")} />
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, autem inventore labore laudantium assumenda doloremque. Sequi facere dolorem, ipsa maiores molestias deserunt hic quisquam, accusamus officiis, perspiciatis ab! Iste, porro.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime placeat obcaecati necessitatibus recusandae quidem veniam ea dignissimos rerum dolorum asperiores, consequatur excepturi fugit amet molestiae commodi distinctio repellat praesentium natus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusantium error molestias, enim ipsa earum neque doloribus, minima minus a odio impedit inventore perferendis eos nobis architecto quasi repellendus dolorem.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ad modi quisquam deserunt, perspiciatis odio quaerat! Amet aliquam perferendis veritatis totam, aliquid eaque quia aperiam tempora excepturi asperiores quidem sed.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, natus illum fuga vel autem corrupti, quas illo eius minima porro excepturi voluptatum esse odio suscipit? Assumenda vel provident voluptas excepturi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui atque ratione nostrum dolores sunt officia voluptates distinctio id quis deleniti ea praesentium cum, porro ullam pariatur fugit! Minus, nobis provident?
    </div>
  )
}

export default List
