import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

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
    ScrollButton,
    ScrollContainer,
    ScrollHeading,
    ScrollImage,
    ScrollItem,
    ScrollList,
    ScrollSection,
} from './HorizontalScrollView.styles'

const SCROLL_IMAGES = [item1, item2, item3, item4, item5, item6, item7, item8, item9] as const

type ScrollTarget = 'left' | 'right'

function HorizontalScrollView() {
    const scrollListRef = useRef<HTMLUListElement>(null)

    const handleScroll = (target: ScrollTarget) => {
        const scrollList = scrollListRef.current

        if (!scrollList) {
            return
        }

        const left = target === 'left'
            ? 0
            : scrollList.scrollWidth - scrollList.clientWidth

        scrollList.scrollTo({ left })
    }

    return (
        <ScrollSection
            id="horizontal-scroll"
            aria-labelledby="horizontal-scroll-title"
        >
            <ScrollHeading id="horizontal-scroll-title">
                가로 스크롤 Section
            </ScrollHeading>

            <ScrollContainer>
                <ScrollList
                    ref={scrollListRef}
                    aria-label="가로 스크롤 이미지 목록"
                    tabIndex={0}
                >
                    {SCROLL_IMAGES.map((src) => (
                        <ScrollItem key={src}>
                            <ScrollImage
                                src={src}
                            />
                        </ScrollItem>
                    ))}
                </ScrollList>

                <ScrollButton
                    type="button"
                    data-direction="left"
                    aria-label="처음 이미지로 이동"
                    onClick={() => handleScroll('left')}
                >
                    <FaChevronLeft aria-hidden="true" />
                </ScrollButton>

                <ScrollButton
                    type="button"
                    data-direction="right"
                    aria-label="마지막 이미지로 이동"
                    onClick={() => handleScroll('right')}
                >
                    <FaChevronRight aria-hidden="true" />
                </ScrollButton>
            </ScrollContainer>
        </ScrollSection>
    )
}

export default HorizontalScrollView