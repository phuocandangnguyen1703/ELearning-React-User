import clsx from "clsx";
import React, { ReactHTMLElement, ReactNode } from "react";
interface TagSkillProps extends React.AnchorHTMLAttributes<HTMLDivElement> {
  isImportant?: boolean;
  isCompleted?: boolean;
  children: ReactNode;
}
const TagSkill: React.FC<TagSkillProps> = ({
  isImportant,
  isCompleted,
  children,
  ...props
}) => {
  const classNames = clsx(
    "w-full h-8 flex items-center justify-center border border-[#46A0CC] rounded-full text-black relative px-3 cursor-pointer",
    {
      "bg-[#9DE1FF80]": isImportant,
    },
    {
      "bg-gray-primary border-none line-through": isCompleted,
    }
  );
  return (
    <div className={classNames} {...props}>
      {isImportant && (
        <span className="absolute -left-2 -top-2">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10.5" cy="10.5" r="10.5" fill="#B4DFFF" />
            <g clip-path="url(#clip0_442_2258)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.8125 8H7.0625C7.58 8 8 8.42 8 8.9375V15.1875C8 15.705 7.58 16.125 7.0625 16.125H5.8125C5.295 16.125 4.875 15.705 4.875 15.1875V8.9375C4.875 8.42 5.295 8 5.8125 8Z"
                fill="#2F80ED"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.2144 16.1251H9.25C8.55937 16.1251 8 15.5657 8 14.8751V8.7201C8 8.25698 8.17125 7.8101 8.48125 7.46573L10.0156 5.76135L10.2525 4.3351C10.3594 3.6926 11.1244 3.41948 11.6219 3.8401C12.025 4.18073 12.375 4.68635 12.375 5.4151C12.375 6.51885 11.75 8.0001 11.75 8.0001H14.875C15.9106 8.0001 16.75 8.83948 16.75 9.8751V10.7076C16.75 10.9826 16.6894 11.2545 16.5725 11.5032L14.9119 15.0457C14.6031 15.7045 13.9419 16.1251 13.2144 16.1251Z"
                fill="#2F80ED"
                fill-opacity="0.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_442_2258">
                <rect
                  width="15"
                  height="15"
                  fill="white"
                  transform="translate(3 3)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      )}
      <p
        className={clsx("text-[10px] font-medium text-center uppercase", {
          "!line-through": isCompleted,
        })}
      >
        {children}
      </p>
    </div>
  );
};

export default TagSkill;
