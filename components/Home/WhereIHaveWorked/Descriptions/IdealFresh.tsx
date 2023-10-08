import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IdealFresh() {
  const tasks = [
    {
      text: "Designed and Built a Desktop app for IdealFresh that manage billings, client circumstances using Apache POI with Microsoft Office Excel.",
      keywords: ["Apache POI"],
    },
    {
      text: "Creating customized scripts for pulling, managing and refactoring files from Clouds.",
      keywords: ["scripts"],
    },
    {
      text: "Daily communications and interactions with a non-developers to solve their problems by providing technological solutions and expertise.",
      keywords: ["non-developers"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend  Developer <span className="text-AAsecondary">@ Graphicweave</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Mar 2021 - Jan 2022</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.graphicweave.com", "_blank")}
          >
            www.graphicweave.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
