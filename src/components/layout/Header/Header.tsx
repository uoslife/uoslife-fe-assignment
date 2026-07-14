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

const MENU_ITEMS = ['홈', '메뉴1', '메뉴2'] as const

function Header() {
    return (
        <HeaderContainer>
            <HeaderInner>
                <LeftArea>
                    <Logo>UOSLIFE FE</Logo>

                    <MenuList>
                        {MENU_ITEMS.map((menu) => (
                            <li key={menu}>
                                <MenuText>{menu}</MenuText>
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