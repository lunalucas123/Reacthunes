import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  return (
    <div>

      <div class="social-container">
          <h3>Social Follow</h3>
                    <a href="https://www.youtube.com/c/jamesqquick"
            className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="5x" />
                    </a>
                    <a href="https://www.facebook.com/learnbuildteach/"
                      className="facebook social">
                      <FontAwesomeIcon icon={faFacebook} size="5x" />
                    </a>
                    <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                      <FontAwesomeIcon icon={faTwitter} size="5x" />
                    </a>
                    <a href="https://www.instagram.com/learnbuildteach"
                      className="instagram social">
                      <FontAwesomeIcon icon={faInstagram} size="5x" />
                    </a>
      </div>
      
    </div>
  )
}
