import Image from "next/image";

export default function BlogItem(props) {
  return (
    <div className="blog__item">
      <div className="blog__item__wrap">
        <div className="blog__item__inner">
          <figure>
            <Image
              src={props.srcImg}
              fill="true"
              alt="icon"
              sizes="(max-width: 170px) 100vw"
            />
          </figure>
          <h2 className="blog__item__title">{props.title}</h2>
          <p className="blog__item__describe">{props.content}</p>
        </div>
      </div>
    </div>
  );
}
