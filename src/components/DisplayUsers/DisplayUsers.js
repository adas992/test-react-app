import { useState, useEffect } from "react";
import axios from "axios";
import style from "./DisplayUsers.module.css";

export default function DisplayUsers() {
  const API = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = axios.get(API);
    items
      .then((item) => {
        setData(item.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  const Title = ({ id, title }) => {
    const classes = style.title;
    return (
      <h3 className={classes}>
        <span>{id}. </span>
        <span>{title}</span>
      </h3>
    );
  };

  const Discription = ({ discription }) => {
    const classes = style.discription;
    return <span className={classes}>{discription}</span>;
  };

  const DisplayUser = (item) => {
    console.log("-- ", item);
    const { id, title, body } = item;
    console.log(item);
    return (
      <div>
        <Title id={id} title={title} />
        <Discription discription={body} />
      </div>
    );
  };

  return (
    <div className={style.container}>
      <h2>Display User</h2>
      <ul className={style.container}>
        {data && data.map((item) => <li key={item.id}>{DisplayUser(item)}</li>)}
      </ul>
    </div>
  );
}
