import Image from "next/image";
import Link from "next/link";

export default function BlogItem(props) {
  return (
    <div className="blog__item">
      <div className="blog__item__wrap">
        <Link className="blog__item__inner" href={props.slug}>
          <figure>
            <Image
              src={props.srcImg}
              alt={props.altImg}
              fill="true"
              sizes="(max-width: 170px) 100vw"
            />
          </figure>
          <h2 className="blog__item__title">{props.title}</h2>
          <p className="blog__item__describe">{props.content}</p>
        </Link>
      </div>
    </div>
  );
}
