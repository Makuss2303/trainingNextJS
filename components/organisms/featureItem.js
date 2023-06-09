import Image from "next/image";

export default function FeatureItem(props) {
  return (
    <div className="feature__item">
      <div className="feature__item__wrap">
        <figure>
          <Image
            src={props.srcImg}
            alt={props.altImg}
            fill
            sizes="(max-width: 50px) 100vw"
          />
        </figure>
        <h2 className="feature__item__title">{props.title}</h2>
        <p className="feature__item__describe">
            {props.describe}
        </p>
        <a href="#">
          <button className="feature__item__button">LEARN MORE</button>
        </a>
      </div>
    </div>
  );
}
