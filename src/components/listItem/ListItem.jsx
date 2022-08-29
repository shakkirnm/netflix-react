import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listItem.scss"

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState()
  const trailer = "https://player.vimeo.com/external/374133176.sd.mp4?s=11639bac69e48d5f7d3e338bebb65c1ff952bf9d&profile_id=164&oauth2_token_id=57447761"

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.unsplash.com/photo-1606840342018-8f1c049681bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
        alt=""
      />
      {isHovered && (
        <>
        
          <video src={trailer} autoPlay={true} loop>
          </video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur itaque, assumenda aliquam saepe ab, doloribus corrupti harum sit fugit impedit? Rerum laboriosam veritatis repellat sunt ullam architecto ad sint.
            </div>
            <div className="genre">
              Action
            </div>
          </div>

        </>
      )}

    </div>
  )
}

export default ListItem