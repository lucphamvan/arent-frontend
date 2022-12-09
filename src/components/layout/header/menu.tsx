import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { MenuItem } from "./config";

const Link = styled(ChakraLink)`
    color: #fff;
    font-weight: 300;
    &.active {
        color: #ff963c;
    }
`;

const MenuItemElement = React.memo(({ item }: { item: MenuItem }) => {
    return (
        <Flex alignItems="center" gap="2" px="4" py="12px">
            <Image src={item.iconUrl} />
            <Link as={NavLink} to={item.to} color="white" fontWeight={300}>
                {item.text}
            </Link>
        </Flex>
    );
});

interface MenuProp {
    menu: MenuItem[];
}

const Menu = ({ menu }: MenuProp) => {
    const listMenuItem = useMemo(() => {
        return menu.map((item, index) => <MenuItemElement key={`item-${index}`} item={item} />);
    }, [menu]);

    return <Flex>{listMenuItem}</Flex>;
};

export default Menu;
