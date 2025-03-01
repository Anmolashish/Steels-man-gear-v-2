import React from "react";

export default function ReviewCard(props) {
  return (
    <div className="min-w-[400px] h-[250px] bg-white rounded-xl border  px-[25px] py-[20px] flex flex-col justify-evenly gap-2 shadow-2xl">
      <div className="review-stars text-xl text-orange-300">★★★★★</div>
      <div className="testimonial text-sm">{props.description}</div>
      <div className="testimonial-author relative flex gap-3 items-center">
        <img
          src={props.image}
          alt="Steel mans gear testimonial image"
          className="rounded-full w-[45px]"
        />
        <span className="text-sm text-gray-500">— {props.auther}</span>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/100/228BE6/quote-right.png"
          alt="quote-right"
          className="absolute right-[20px] opacity-50"
        />
      </div>
    </div>
  );
}
