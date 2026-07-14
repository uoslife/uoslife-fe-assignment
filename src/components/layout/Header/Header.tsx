import { FaGithub, FaInstagram, FaPen } from 'react-icons/fa'

import {
    HeaderContainer,
    HeaderInner,
    IconArea,
    IconItem,
    IconLink,
    LeftArea,
    Logo,
    MenuText,
    MenuList,
} from './Header.styles'

const MENU_ITEMS = [
    { label: '홈', href: "#home" },
    { label: '메뉴1', href: "#infinite-banner" },
    { label: '메뉴2', href: "#horizontal-scroll" },
] as const

function Header() {
    return (
        <HeaderContainer>
            <HeaderInner>
                <LeftArea>
                    <Logo>UOSLIFE FE</Logo>

                    <MenuList>
                        {MENU_ITEMS.map(({ label, href }) => (
                            <li key={href}>
                                <MenuText href={href}>
                                    {label}
                                </MenuText>
                            </li>
                        ))}
                    </MenuList>
                </LeftArea>

                <IconArea>
                    <IconLink
                        href="https://github.com/vallltru"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Github에서 프로필 보기"
                    >
                        <FaGithub />
                    </IconLink>

                    <IconLink
                        href="https://instagram.com/vallltru"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram에서 프로필 보기"
                    >
                        <FaInstagram />
                    </IconLink>

                    <IconItem>
                        <FaPen />
                    </IconItem>
                </IconArea>
            </HeaderInner>
        </HeaderContainer>
    )
}

export default Header