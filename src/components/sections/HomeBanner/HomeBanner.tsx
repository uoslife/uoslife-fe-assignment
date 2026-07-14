import { FaExternalLinkAlt } from 'react-icons/fa'

import {
    BannerContent,
    BannerLink,
    BannerSection,
    BannerTitle,
} from './HomeBanner.styles'

const BANNER_LINK = 'https://uoslife.team'

function HomeBanner() {
    return (
        <BannerSection
            id="home"
            aria-labelledby="home-banner-title"
        >
            <BannerContent>
                <BannerTitle id="home-banner-title">
                    시대생 프론트 아자아자 ⚾
                </BannerTitle>

                <BannerLink
                    href={BANNER_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaExternalLinkAlt aria-hidden="true" />
                    <span>바로가기</span>
                </BannerLink>
            </BannerContent>
        </BannerSection>
    )
}

export default HomeBanner