import item1 from '../../../assets/items/1.jpg'
import item2 from '../../../assets/items/2.jpg'
import item3 from '../../../assets/items/3.jpg'
import item4 from '../../../assets/items/4.jpg'
import item5 from '../../../assets/items/5.jpg'
import item6 from '../../../assets/items/6.jpg'
import item7 from '../../../assets/items/7.jpg'
import item8 from '../../../assets/items/8.jpg'
import item9 from '../../../assets/items/9.jpg'

import {
    BannerHeading,
    BannerImage,
    BannerItem,
    BannerList,
    BannerSection,
    BannerTrack,
    BannerViewport,
} from './InfiniteBanner.styles'

const BANNER_IMAGES = [item1, item2, item3, item4, item5, item6, item7, item8, item9] as const

type BannerImageListProps = {
    isClone?: boolean
}

function BannerImageList({
                             isClone = false,
                         }: BannerImageListProps) {
    return (
        <BannerList aria-hidden={isClone}>
            {BANNER_IMAGES.map((src) => (
                <BannerItem key={src}>
                    <BannerImage
                        src={src}
                    />
                </BannerItem>
            ))}
        </BannerList>
    )
}

function InfiniteBanner() {
    return (
        <BannerSection
            id="infinite-banner"
            aria-labelledby="infinite-banner-title"
        >
            <BannerHeading id="infinite-banner-title">
                무한배너 Section
            </BannerHeading>

            <BannerViewport>
                <BannerTrack>
                    <BannerImageList />
                    <BannerImageList isClone />
                    <BannerImageList isClone />
                </BannerTrack>
            </BannerViewport>
        </BannerSection>
    )
}

export default InfiniteBanner