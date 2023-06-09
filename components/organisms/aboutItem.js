import Image from "next/image";

export default function AboutItem(props) {
  return (
    <>
      {!props.text_left_right ? (
        <div className="row">
          <div className="col-sm-6">
            <figure>
              <Image
                src={props.srcImg}
                alt={props.altImg}
                fill="true"
                sizes="(max-width: 170px) 100vw"
              />
            </figure>
          </div>
          <div className="col-sm-6">
            <div className="about__content">
              <h1 className="about__content__title">{props.title}</h1>
              <p className="about__content__describe">{props.describe}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-sm-6">
            <div className="about__content">
              <h1 className="about__content__title">{props.title}</h1>
              <p className="about__content__describe">{props.describe}</p>
            </div>
          </div>
          <div className="col-sm-6">
            <figure>
              <Image
                src={props.srcImg}
                alt={props.altImg}
                fill="true"
                sizes="(max-width: 170px) 100vw"
              />
            </figure>
          </div>
        </div>
      )}
    </>
  );
}
