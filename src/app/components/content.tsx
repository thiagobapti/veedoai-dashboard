import React, { useCallback } from "react";
import Tile from "./tile";
import "./content.scss";
import content from "../data/content";
import { EyeIcon, HeartIcon } from "@heroicons/react/24/solid";

interface ContentProps {
  onClick: () => void;
  className?: string;
}

const block = "content";
const Content: React.FC<ContentProps> = ({ className }) => {
  const openVideoUrl = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);
  return (
    <Tile
      title={`📺 Content (${content.length})`}
      className={`${block} ${className}`}
      expandable
    >
      <div className={`${block}__inner`}>
        {content.map((item) => (
          <div className={`${block}__video-card`} key={item.videoURL}>
            <div
              className={`${block}__video-card-thumbnail`}
              style={{ backgroundImage: `url(${item.thumbnailURL})` }}
              onClick={() => openVideoUrl(item.videoURL)}
            >
              <div className={`${block}__video-card-tags`}>
                <div className={`${block}__video-card-tag`}>
                  {item.platform}
                </div>
                <div className={`${block}__video-card-tag`}>
                  <EyeIcon
                    className={`${block}__video-card-tag-icon`}
                    color="#26d26d"
                  />
                  {item.views}
                </div>
                <div className={`${block}__video-card-tag`}>
                  <HeartIcon
                    className={`${block}__video-card-tag-icon`}
                    color="#ff8b8b"
                  />
                  {item.likes}
                </div>
              </div>
              {/* <ArrowTopRightOnSquareIcon
                className={`${block}__video-card-play-icon`}
              /> */}
            </div>
            <div className={`${block}__video-card-info`}>
              <div className={`${block}__video-card-title`}>{item.title}</div>
              <div className={`${block}__video-card-description`}>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Tile>
  );
};

export default Content;
