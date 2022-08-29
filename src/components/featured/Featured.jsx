import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

const Featured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series" }</span>
                <select name="genre" id="genre">
                    <option> Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>

            </div>
        )}
        <img 
            width="100%"
            src="https://images.unsplash.com/photo-1659203540352-802f6600176e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            alt="" />
        <div className="info">
            <img src="/images/icon.png" 
                alt="" />
            <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe officiis voluptatum consectetur doloribus animi, sunt fugit rerum ratione accusamus nesciunt nam odio, molestiae dolorem similique impedit harum! Sed, laudantium in!</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>

            </div>
        </div>
        

    </div>
  )
}

export default Featured