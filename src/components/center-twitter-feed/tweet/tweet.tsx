import './tweet.scss'
import TweetHead from './tweet-head/tweet-head'
import TweetBody from './tweet-body/tweet-body'
import TweetFooter from './tweet-footer/tweet-footer'

function Tweet() {
  return (
    <div className='tweet'>
      <TweetHead />
      <TweetBody />
      <TweetFooter />
    </div>
  )
}

export default Tweet
