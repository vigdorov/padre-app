import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faTwitter, faVk} from "@fortawesome/free-brands-svg-icons";

export interface ISocial {
    facebook: any;
    twitter: any;
    vk: any;
}
const SocialChef = (props: ISocial) => {

library.add(faFacebook, faTwitter, faVk);
    return (
        <div className="social_chef">
            <a href={props.facebook}>
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href= {props.twitter}>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={props.vk}>
                <FontAwesomeIcon icon={faVk} />
            </a>


        </div>
    )
};
export default SocialChef;