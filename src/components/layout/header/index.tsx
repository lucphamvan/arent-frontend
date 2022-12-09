import { Box, Container, Flex, Image, Menu as ChakraMenu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { NavLink, useNavigate } from "react-router-dom";
import Menu from "./menu";
import { menu } from "./config";
import { ReactComponent as IconMenu } from "assets/img/icon_menu.svg";

const OuterContainer = styled(Box)`
    background-color: #414141;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.160784);
`;

const InnerContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

const Header = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <OuterContainer>
            <InnerContainer maxW="container.lg">
                <Image src="./img/logo.svg" onClick={goHome} cursor="pointer" />
                <Flex gap="4">
                    <Menu menu={menu} />

                    {/* Button Menu */}
                    <ChakraMenu>
                        <MenuButton>
                            <IconMenu />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <NavLink to="/column-page">コラム一覧</NavLink>
                            </MenuItem>
                        </MenuList>
                    </ChakraMenu>
                </Flex>
            </InnerContainer>
        </OuterContainer>
    );
};

export default Header;
